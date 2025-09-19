export default function Donate() {
  return (
    <section className="donate">
      <h2>❤️ Donate Form</h2>
      <p className="donate-intro">Please fill out the form below to register your blood donation. Walk-ins are still welcome!</p>

      <form className="donate-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone" required />
        </div>

        <div className="form-group">
          <label>Blood Type</label>
          <select required>
            <option value="">Select your blood type</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Donation Date</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Message (Optional)</label>
          <textarea placeholder="Any special notes..."></textarea>
        </div>

        <button type="submit" className="btn donate-btn">Submit Donation</button>
      </form>
    </section>
  );
}