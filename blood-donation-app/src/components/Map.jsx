// src/components/Map.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// fix default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function LocateMe({ setPosition }) {
  const map = useMap();
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const p = [latitude, longitude];
        setPosition(p);
        map.setView(p, 13);
      },
      (err) => console.warn("Geolocation error:", err)
    );
  }, [map, setPosition]);
  return null;
}

export default function Map({ initialPosition = [33.589886, -7.603869], initialZoom = 12 }) {
  const [position, setPosition] = useState(initialPosition);

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <MapContainer center={position} zoom={initialZoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocateMe setPosition={setPosition} />
        <Marker position={position}>
          <Popup>أنت هنا (أو الموقع الافتراضي).</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
