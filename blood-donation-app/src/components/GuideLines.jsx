export default function Guidelines() {
  return (
    <section className="guidelines-section">
      <div className="guidelines-overlay">
        <div className="guidelines-container fade-in">
          <p className="guidelines-intro">
            Follow these important guidelines to ensure a safe and successful blood donation experience.
          </p>

          <div className="guidelines-cards">
            {/* Before Donation */}
            <div className="card before">
              <h3>💙 Before Donation</h3>
              <ul>
                <li><strong>Get Plenty of Sleep</strong><br />7–8 hours before donating</li>
                <li><strong>Eat Iron-Rich Foods</strong><br />Spinach, red meat, lentils (2–3 days prior)</li>
                <li><strong>Stay Hydrated</strong><br />Drink water 24 hrs before donation</li>
                <li><strong>Eat a Good Meal</strong><br />2–3 hrs before, avoid fatty foods</li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="card requirements">
              <h3>🔴 Requirements</h3>
              <ul>
                <li>Be in good general health</li>
                <li>Be at least 17 years old (16 with consent)</li>
                <li>Weigh at least 110 lbs (50 kg)</li>
                <li>No donations in last 56 days</li>
                <li>Bring valid photo ID</li>
                <li>No tattoos/piercings in last 3 months</li>
              </ul>
            </div>

            {/* After Donation */}
            <div className="card after">
              <h3>💚 After Donation</h3>
              <ul>
                <li>Rest for 10–15 minutes</li>
                <li>Keep bandage on 4–6 hours</li>
                <li>Avoid heavy lifting 24 hrs</li>
                <li>Drink extra fluids (24–48 hrs)</li>
                <li>Eat iron-rich foods</li>
                <li>Contact us if you feel unwell</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}