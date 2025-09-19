export default function BloodTypes() {
    const bloodData = [
      { type: "A+", canDonate: "A+, AB+", canReceive: "A+, A-, O+, O-" },
      { type: "A-", canDonate: "A+, A-, AB+, AB-", canReceive: "A-, O-" },
      { type: "B+", canDonate: "B+, AB+", canReceive: "B+, B-, O+, O-" },
      { type: "B-", canDonate: "B+, B-, AB+, AB-", canReceive: "B-, O-" },
      { type: "AB+", canDonate: "AB+", canReceive: "Everyone (Universal Recipient)" },
      { type: "AB-", canDonate: "AB+, AB-", canReceive: "A-, B-, AB-, O-" },
      { type: "O+", canDonate: "O+, A+, B+, AB+", canReceive: "O+, O-" },
      { type: "O-", canDonate: "Everyone (Universal Donor)", canReceive: "O-" },
    ];
  
    return (
      <section className="blood-types">
        <h2>🩸 Blood Types Information</h2>
        <div className="blood-cards">
          {bloodData.map((blood, index) => (
            <div key={index} className="blood-card">
              <h3>{blood.type}</h3>
              <p><strong>Can Donate To:</strong> {blood.canDonate}</p>
              <p><strong>Can Receive From:</strong> {blood.canReceive}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }