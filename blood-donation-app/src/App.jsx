import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BloodTypes from "./components/BloodTypes";
import GuideLines from "./components/GuideLines";
import Locations from "./components/Locations";
import Donate from "./components/Donate";
import Urgent from "./components/Urgent";
import Login from "./components/Login";
import Seeking from "./components/Seeking";
import Footer from "./components/Footer";

function App() {
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.text))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app"}>
        <NavBar toggleMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <h1>Blood Donation App</h1>
        <p>{message}</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blood-Types" element={<BloodTypes />} />
          <Route path="/GuideLines" element={<GuideLines />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Urgent" element={<Urgent />} />
          <Route path="/Seeking" element={<Seeking />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
