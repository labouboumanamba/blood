import { useState } from 'react';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    bloodType: '',
    phone: '',
    dateOfBirth: '',
    emergencyContact: '',
    medicalConditions: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    // Add login logic here
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration attempt:', registerData);
    // Add registration logic here
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-header">
          <h2>🩸 {isRegistering ? 'Join Our Community' : 'Welcome Back, Hero'}</h2>
          <p>{isRegistering ? 'Register as a blood donor and start saving lives today' : 'Login to your donor account and continue making a difference'}</p>
        </div>

        <div className="auth-tabs">
          <button 
            className={`tab-btn ${!isRegistering ? 'active' : ''}`}
            onClick={() => setIsRegistering(false)}
          >
            Login
          </button>
          <button 
            className={`tab-btn ${isRegistering ? 'active' : ''}`}
            onClick={() => setIsRegistering(true)}
          >
            Register
          </button>
        </div>

        {!isRegistering ? (
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                required 
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                required 
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={loginData.rememberMe}
                  onChange={(e) => setLoginData({...loginData, rememberMe: e.target.checked})}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="btn auth-btn">Login to Account</button>
            
            <div className="social-login">
              <p>Or login with</p>
              <div className="social-buttons">
                <button type="button" className="btn social-btn google">🔍 Google</button>
                <button type="button" className="btn social-btn facebook">📘 Facebook</button>
              </div>
            </div>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleRegisterSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  value={registerData.fullName}
                  onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Blood Type</label>
                <select 
                  value={registerData.bloodType}
                  onChange={(e) => setRegisterData({...registerData, bloodType: e.target.value})}
                  required
                >
                  <option value="">Select blood type</option>
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
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                value={registerData.email}
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                required 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone"
                  value={registerData.phone}
                  onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input 
                  type="date" 
                  value={registerData.dateOfBirth}
                  onChange={(e) => setRegisterData({...registerData, dateOfBirth: e.target.value})}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="Create password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input 
                  type="password" 
                  placeholder="Confirm password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Emergency Contact</label>
              <input 
                type="text" 
                placeholder="Emergency contact name and phone"
                value={registerData.emergencyContact}
                onChange={(e) => setRegisterData({...registerData, emergencyContact: e.target.value})}
                required 
              />
            </div>

            <div className="form-group">
              <label>Medical Conditions (Optional)</label>
              <textarea 
                placeholder="Any medical conditions we should know about..."
                value={registerData.medicalConditions}
                onChange={(e) => setRegisterData({...registerData, medicalConditions: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="btn auth-btn">Create Donor Account</button>
          </form>
        )}

        <div className="auth-stats">
          <div className="stat">
            <h3>2,500+</h3>
            <p>Registered Donors</p>
          </div>
          <div className="stat">
            <h3>15,000+</h3>
            <p>Lives Saved</p>
          </div>
          <div className="stat">
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}