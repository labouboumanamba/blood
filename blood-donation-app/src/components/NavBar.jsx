import { Link } from "react-router-dom";

export default function Navbar({ toggleMode, darkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">🩸 BloodLink</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blood-types">Blood Types</Link></li>
        <li><Link to="/guidelines">Guidelines</Link></li>
        <li><Link to="/locations">Locations</Link></li>
      </ul>
      <div className="nav-buttons">
        <Link to="/login" className="btn login">Login as Donor</Link>
        <Link to="/seeking" className="btn seeking">Seeking Donors</Link>
        <Link to="/urgent" className="btn urgent">Urgent</Link>
        <button className="btn mode-switch" onClick={toggleMode}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
