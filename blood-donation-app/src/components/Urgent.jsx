import { useState } from "react";

export default function Urgent() {
  const [urgentRequests] = useState([
    {
      id: 1,
      hospital: 'Central Emergency Hospital',
      bloodType: 'O-',
      unitsNeeded: 8,
      timeRemaining: '2 hours',
      severity: 'Life-threatening',
      patientCount: 3,
      description: 'Multiple trauma patients from highway accident require immediate O- transfusions.',
      contact: '(555) 911-BLOOD',
      location: 'Downtown Medical District',
      lastUpdated: '15 minutes ago'
    },
    {
      id: 2,
      hospital: 'Children\'s Medical Center',
      bloodType: 'A-',
      unitsNeeded: 4,
      timeRemaining: '4 hours',
      severity: 'Critical',
      patientCount: 1,
      description: 'Pediatric patient with rare blood type needs A- for emergency surgery.',
      contact: '(555) 234-KIDS',
      location: 'Pediatric Wing, 3rd Floor',
      lastUpdated: '32 minutes ago'
    },
    {
      id: 3,
      hospital: 'Regional Trauma Center',
      bloodType: 'B-',
      unitsNeeded: 6,
      timeRemaining: '6 hours',
      severity: 'Critical',
      patientCount: 2,
      description: 'Surgical complications require immediate B- blood supply.',
      contact: '(555) 456-HELP',
      location: 'Trauma Unit, Level 2',
      lastUpdated: '1 hour ago'
    }
  ]);

  const [notifications, setNotifications] = useState(true);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [donorResponse, setDonorResponse] = useState({
    availability: '',
    arrivalTime: '',
    donorName: '',
    bloodType: '',
    phone: '',
    message: ''
  });

  const getSeverityClass = (severity) => {
    switch(severity.toLowerCase()) {
      case 'life-threatening': return 'life-threatening';
      case 'critical': return 'critical';
      case 'urgent': return 'urgent';
      default: return 'moderate';
    }
  };

  const getTimeRemainingClass = (timeRemaining) => {
    const hours = parseInt(timeRemaining);
    if (hours <= 2) return 'immediate';
    if (hours <= 4) return 'urgent';
    return 'moderate';
  };

  const handleRespondNow = () => {
    setSelectedRequest('critical-shortage');
    setShowResponseModal(true);
  };

  const handleEmergencyResponse = (request) => {
    setSelectedRequest(request);
    setShowResponseModal(true);
  };

  const handleResponseSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    alert(`Thank you ${donorResponse.donorName}! Your emergency response has been submitted. The hospital will contact you at ${donorResponse.phone} to confirm details. Please head to the hospital immediately if you confirmed availability.`);
    
    // Reset form and close modal
    setDonorResponse({
      availability: '',
      arrivalTime: '',
      donorName: '',
      bloodType: '',
      phone: '',
      message: ''
    });
    setShowResponseModal(false);
    setSelectedRequest(null);
  };

  const handleQuickCall = (contact) => {
    // In a real app, this would initiate a phone call
    window.open(`tel:${contact.replace(/[^\d]/g, '')}`);
  };

  const handleShareUrgent = (request) => {
    // In a real app, this would open share dialog
    const shareText = `URGENT: ${request.hospital} needs ${request.unitsNeeded} units of ${request.bloodType} blood! ${request.description}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Emergency Blood Request',
        text: shareText,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Emergency request details copied to clipboard! Please share with potential donors.');
      });
    }
  };

  return (
    <section className="urgent-section">
      <div className="urgent-header">
        <div className="header-content">
          <h2>🚨 Emergency Blood Requests</h2>
          <p>Critical situations requiring immediate donor response</p>
        </div>
        <div className="emergency-hotline">
          <span className="hotline-label">Emergency Hotline</span>
          <a href="tel:555-911-BLOOD" className="hotline-number">📞 (555) 911-BLOOD</a>
        </div>
      </div>

      <div className="urgent-alerts">
        <div className="alert-banner critical">
          <span className="alert-icon">⚠️</span>
          <div className="alert-content">
            <strong>CRITICAL SHORTAGE ALERT:</strong> O- blood critically low across all hospitals. Immediate donations needed.
          </div>
          <button className="alert-action" onClick={handleRespondNow}>Respond Now</button>
        </div>
      </div>

      <div className="urgent-stats">
        <div className="stat-card critical">
          <div className="stat-icon">🩸</div>
          <h3>11</h3>
          <p>Critical Requests</p>
          <span className="stat-trend">↑ 3 in last hour</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏰</div>
          <h3>2.5hrs</h3>
          <p>Avg Time Critical</p>
          <span className="stat-trend">↓ 30min from yesterday</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏥</div>
          <h3>7</h3>
          <p>Hospitals Affected</p>
          <span className="stat-trend">→ Same as yesterday</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <h3>23</h3>
          <p>Patients Waiting</p>
          <span className="stat-trend">↑ 5 in last 2hrs</span>
        </div>
      </div>

      <div className="urgent-requests">
        <div className="requests-header">
          <h3>Active Emergency Requests</h3>
          <div className="header-actions">
            <button className="btn notification-btn">
              {notifications ? '🔔' : '🔕'} Notifications {notifications ? 'On' : 'Off'}
            </button>
            <button className="btn refresh-btn">🔄 Refresh</button>
          </div>
        </div>

        <div className="urgent-cards">
          {urgentRequests.map(request => (
            <div key={request.id} className={`urgent-card ${getSeverityClass(request.severity)}`}>
              <div className="urgent-card-header">
                <div className="hospital-info">
                  <h4>{request.hospital}</h4>
                  <span className="location">📍 {request.location}</span>
                </div>
                <div className="severity-badge">
                  <span className={`severity ${getSeverityClass(request.severity)}`}>
                    {request.severity}
                  </span>
                </div>
              </div>

              <div className="urgent-details">
                <div className="blood-requirement">
                  <div className="blood-type-display">
                    <span className="blood-type-urgent">{request.bloodType}</span>
                    <div className="requirement-info">
                      <span className="units-urgent">{request.unitsNeeded} units needed</span>
                      <span className="patient-count">{request.patientCount} patient(s)</span>
                    </div>
                  </div>
                  <div className={`time-remaining ${getTimeRemainingClass(request.timeRemaining)}`}>
                    <span className="time-icon">⏱️</span>
                    <span className="time-text">{request.timeRemaining} remaining</span>
                  </div>
                </div>

                <p className="urgent-description">{request.description}</p>

                <div className="request-meta">
                  <span className="last-updated">Last updated: {request.lastUpdated}</span>
                  <span className="contact-info">📞 {request.contact}</span>
                </div>
              </div>

              <div className="urgent-actions">
                <button className="btn emergency-respond" onClick={() => handleEmergencyResponse(request)}>🚨 Emergency Response</button>
                <button className="btn quick-call" onClick={() => handleQuickCall(request.contact)}>📞 Call Hospital</button>
                <button className="btn share-urgent" onClick={() => handleShareUrgent(request)}>📢 Share Alert</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="urgent-help">
        <div className="help-card">
          <h3>🆘 How to Respond to Emergency Requests</h3>
          <div className="help-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Check Eligibility</h4>
                <p>Ensure you match the blood type and meet donation requirements</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Contact Hospital</h4>
                <p>Call the emergency number to confirm availability and get directions</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>Immediate Response</h4>
                <p>Head to the hospital immediately - every minute counts in emergencies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="emergency-contacts">
          <h3>🚑 Emergency Contacts</h3>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-type">Blood Bank Emergency</span>
              <a href="tel:555-911-BLOOD" className="contact-number">(555) 911-BLOOD</a>
            </div>
            <div className="contact-item">
              <span className="contact-type">Trauma Center Direct</span>
              <a href="tel:555-TRAUMA1" className="contact-number">(555) TRAUMA-1</a>
            </div>
            <div className="contact-item">
              <span className="contact-type">Pediatric Emergency</span>
              <a href="tel:555-234-KIDS" className="contact-number">(555) 234-KIDS</a>
            </div>
          </div>
        </div>
      </div>

      {/* Response Modal */}
      {showResponseModal && (
        <div className="modal-overlay" onClick={() => setShowResponseModal(false)}>
          <div className="response-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🚨 Emergency Response Form</h3>
              <button className="close-modal" onClick={() => setShowResponseModal(false)}>✕</button>
            </div>
            
            <form onSubmit={handleResponseSubmit} className="response-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={donorResponse.donorName}
                  onChange={(e) => setDonorResponse({...donorResponse, donorName: e.target.value})}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Blood Type *</label>
                  <select
                    value={donorResponse.bloodType}
                    onChange={(e) => setDonorResponse({...donorResponse, bloodType: e.target.value})}
                    required
                  >
                    <option value="">Select Blood Type</option>
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

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={donorResponse.phone}
                    onChange={(e) => setDonorResponse({...donorResponse, phone: e.target.value})}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Availability *</label>
                <select
                  value={donorResponse.availability}
                  onChange={(e) => setDonorResponse({...donorResponse, availability: e.target.value})}
                  required
                >
                  <option value="">Select Availability</option>
                  <option value="immediate">Available Immediately (within 30 min)</option>
                  <option value="within-1hr">Available within 1 hour</option>
                  <option value="within-2hrs">Available within 2 hours</option>
                  <option value="within-4hrs">Available within 4 hours</option>
                  <option value="not-available">Cannot donate today</option>
                </select>
              </div>

              {donorResponse.availability && donorResponse.availability !== 'not-available' && (
                <div className="form-group">
                  <label>Expected Arrival Time</label>
                  <input
                    type="time"
                    value={donorResponse.arrivalTime}
                    onChange={(e) => setDonorResponse({...donorResponse, arrivalTime: e.target.value})}
                    placeholder="Estimated arrival time"
                  />
                </div>
              )}

              <div className="form-group">
                <label>Additional Message</label>
                <textarea
                  value={donorResponse.message}
                  onChange={(e) => setDonorResponse({...donorResponse, message: e.target.value})}
                  placeholder="Any additional information for the hospital (medical conditions, previous donations, etc.)"
                  rows="3"
                />
              </div>

              <div className="emergency-notice">
                <p><strong>⚠️ Emergency Response Notice:</strong></p>
                <p>By submitting this form, you confirm that you are eligible to donate blood and understand this is an emergency situation requiring immediate response.</p>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn secondary" onClick={() => setShowResponseModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn emergency">
                  🚨 Submit Emergency Response
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}