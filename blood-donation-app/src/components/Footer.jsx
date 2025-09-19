export default   function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-section">
            <h2 className="footer-logo">🩸 BloodLink</h2>
            <p>
              Connecting blood donors with those in need. Together, we save lives and 
              strengthen our community through the gift of blood donation.
            </p>
            <div className="footer-socials">
              <a href="#">🌐</a>
              <a href="#">🐦</a>
              <a href="#">📷</a>
            </div>
          </div>
  
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/blood-types">Blood Types</a></li>
              <li><a href="/guidelines">Guidelines</a></li>
              <li><a href="/locations">Find Centers</a></li>
              <li><a href="/urgent">Emergency Requests</a></li>
            </ul>
          </div>
  
          {/* For Donors */}
          <div className="footer-section">
            <h3>For Donors</h3>
            <ul>
              <li><a href="#">Register as Donor</a></li>
              <li><a href="#">Donation History</a></li>
              <li><a href="#">Health Screening</a></li>
              <li><a href="#">Appointment Booking</a></li>
              <li><a href="#">Rewards Program</a></li>
            </ul>
          </div>
  
          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📞 Emergency: (555) 911-BLOOD</p>
            <p>✉️ info@bloodlink.org</p>
            <p>📍 123 Health St, Medical District</p>
            <button className="hotline-btn">🚨 Emergency Hotline</button>
          </div>
        </div>
  
        <hr />
  
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} BloodLink. All rights reserved. 
            A project dedicated to saving lives through blood donation.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Medical Disclaimer</a>
          </div>
        </div>
  
        <p className="footer-subject">
          <strong>Project Subject:</strong> Healthcare Technology & Community Wellness Initiative – 
          Developing digital solutions to improve blood donation accessibility and emergency response systems.
        </p>
      </footer>
    );
  }
  