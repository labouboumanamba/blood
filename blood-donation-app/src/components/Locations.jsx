import Map from "./Map";

export default function Locations() {
  return (
    <section className="locations-section">
      <h2>📍 Nearest Donation Centers</h2>

      <div className="locations-container">
        {/* Left: Google Map */}
        <div className="map-container">
          <Map />
        </div>

        {/* Right: Location Info Card */}
        <div className="location-info-card">
          <h3>Downtown Medical Center <span className="urgent-tag">URGENT</span></h3>
          <p>📍 123 Main St, Downtown Casablanca</p>
          <p>📞 (555) 123-4567</p>
          <p>🕒 Mon–Fri: 8AM–6PM, Sat: 9AM–4PM</p>
          <p><strong>Needed:</strong> <span className="blood-type">O-</span>, <span className="blood-type">A-</span>, <span className="blood-type">B-</span>, <span className="blood-type">AB-</span></p>
          <button className="btn directions-btn">🧭 Get Directions</button>
        </div>
      </div>
    </section>
  );
}