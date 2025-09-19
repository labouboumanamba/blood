import { Link } from "react-router-dom";

export default function Home() {
    return (
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Save Lives, <span>Give Blood</span></h1>
          <p>Every donation can save up to three lives. Join our community of heroes and make a difference today.</p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn donate">Donate Now</Link>
            <Link to="/locations" className="btn find">Find Locations</Link>
          </div>
          <div className="stats">
            <div><h2>10,000+</h2><p>Lives Saved</p></div>
            <div><h2>500+</h2><p>Active Donors</p></div>
            <div><h2>50+</h2><p>Locations</p></div>
          </div>
        </div>
      </section>
    );
  }