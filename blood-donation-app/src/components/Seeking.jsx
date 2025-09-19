import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Seeking() {
  const [filters, setFilters] = useState({
    bloodType: '',
    location: '',
    urgency: '',
    availability: ''
  });

  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      hospital: 'Central Medical Center',
      bloodType: 'O-',
      unitsNeeded: 5,
      urgency: 'Critical',
      location: 'Downtown',
      timePosted: '2 hours ago',
      description: 'Emergency surgery patient needs immediate O- blood transfusion.',
      contact: '(555) 123-4567'
    },
    {
      id: 2,
      hospital: 'Children\'s Hospital',
      bloodType: 'A+',
      unitsNeeded: 3,
      urgency: 'High',
      location: 'Medical District',
      timePosted: '4 hours ago',
      description: 'Pediatric patient requires A+ blood for upcoming surgery.',
      contact: '(555) 234-5678'
    },
    {
      id: 3,
      hospital: 'Regional Blood Bank',
      bloodType: 'B-',
      unitsNeeded: 8,
      urgency: 'Medium',
      location: 'Westside',
      timePosted: '1 day ago',
      description: 'Low inventory alert - B- blood needed to maintain safe levels.',
      contact: '(555) 345-6789'
    },
    {
      id: 4,
      hospital: 'Emergency Medical Center',
      bloodType: 'AB+',
      unitsNeeded: 2,
      urgency: 'High',
      location: 'Eastside',
      timePosted: '6 hours ago',
      description: 'Trauma patient needs AB+ blood for stabilization.',
      contact: '(555) 456-7890'
    }
  ]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({...prev, [filterType]: value}));
  };

  const getUrgencyClass = (urgency) => {
    switch(urgency.toLowerCase()) {
      case 'critical': return 'critical';
      case 'high': return 'high';
      case 'medium': return 'medium';
      default: return 'low';
    }
  };

  const filteredResults = searchResults.filter(request => {
    return (
      (!filters.bloodType || request.bloodType === filters.bloodType) &&
      (!filters.location || request.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.urgency || request.urgency === filters.urgency)
    );
  });

  const handleEmergencyResponse = (request) => {
    alert(`Thank you for responding to the emergency request at ${request.hospital}! Please call ${request.contact} immediately to confirm your availability and get directions.`);
  };

  const handleQuickCall = (contact) => {
    window.open(`tel:${contact.replace(/[^\d]/g, '')}`);
  };

  const handleShareUrgent = (request) => {
    const shareText = `URGENT: ${request.hospital} needs ${request.unitsNeeded} units of ${request.bloodType} blood! ${request.description}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Blood Donation Request',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Request details copied to clipboard! Please share with potential donors.');
      });
    }
  };

  return (
    <section className="seeking-section">
      <div className="seeking-header">
        <h2>🔍 Blood Donation Requests</h2>
        <p>Help save lives by responding to urgent blood donation requests in your area</p>
      </div>

      <div className="seeking-filters">
        <div className="filter-group">
          <label>Blood Type</label>
          <select 
            value={filters.bloodType}
            onChange={(e) => handleFilterChange('bloodType', e.target.value)}
          >
            <option value="">All Types</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Location</label>
          <input 
            type="text"
            placeholder="Enter location"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Urgency Level</label>
          <select 
            value={filters.urgency}
            onChange={(e) => handleFilterChange('urgency', e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button className="btn filter-btn">🔍 Search Requests</button>
      </div>

      <div className="seeking-stats">
        <div className="stat-card">
          <h3>24</h3>
          <p>Active Requests</p>
        </div>
        <div className="stat-card">
          <h3>156</h3>
          <p>Units Needed</p>
        </div>
        <div className="stat-card">
          <h3>8</h3>
          <p>Critical Cases</p>
        </div>
        <div className="stat-card">
          <h3>45min</h3>
          <p>Avg Response Time</p>
        </div>
      </div>

      <div className="seeking-results">
        <h3>Current Blood Requests ({filteredResults.length})</h3>
        <div className="request-cards">
          {filteredResults.map(request => (
            <div key={request.id} className="request-card">
              <div className="request-header">
                <div className="hospital-info">
                  <h4>{request.hospital}</h4>
                  <span className="location">📍 {request.location}</span>
                </div>
                <div className="urgency-info">
                  <span className={`urgency-badge ${getUrgencyClass(request.urgency)}`}>
                    {request.urgency}
                  </span>
                  <span className="time-posted">{request.timePosted}</span>
                </div>
              </div>

              <div className="request-details">
                <div className="blood-info">
                  <span className="blood-type-large">{request.bloodType}</span>
                  <div className="units-info">
                    <span className="units-needed">{request.unitsNeeded} units needed</span>
                  </div>
                </div>
                <p className="request-description">{request.description}</p>
              </div>

              <div className="request-actions">
                <button className="action-btn primary" onClick={() => handleEmergencyResponse(request)}>Respond</button>
                <button className="action-btn secondary" onClick={() => handleQuickCall(request.contact)}>Call Hospital</button>
                <button className="action-btn tertiary" onClick={() => handleShareUrgent(request)}>Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="seeking-cta">
        <h3>Can't find what you're looking for?</h3>
        <p>Register as a donor to get notified about requests matching your blood type</p>
        <Link to="/login" className="btn cta-btn">Register as Donor</Link>
      </div>
    </section>
  );
}
