import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.css';
import logo from "./llogo.png"; 

const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Simulating a login process
  const fakeLoginAPI = (phone, pass) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (phone === '1234567890' && pass === 'password123') {
          resolve('Login successful!');
        } else {
          reject('Invalid phone number or password');
        }
      }, 1000);
    });
  };

  // Handle form submission
  const handleLogin = async () => {
    if (!phoneNumber && !password) {
      setErrorMessage('Please enter both phone number and password');
      return;
    }
    if (!phoneNumber) {
      setErrorMessage('Please enter your phone number');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password');
      return;
    }
    if (phoneNumber.length !== 10) {
      setErrorMessage('Phone number must be exactly 10 digits');
      return;
    }
    try {
      const response = await fakeLoginAPI(phoneNumber, password);
      alert(response);
      if (rememberMe) {
        localStorage.setItem('userPhone', phoneNumber);
      }
      navigate('/App');  // Redirect to home page after successful login
    } catch (error) {
      setErrorMessage(error);
    }
  };

  // Automatically fill the phone number if it's saved
  React.useEffect(() => {
    const savedPhone = localStorage.getItem('userPhone');
    if (savedPhone) {
      setPhoneNumber(savedPhone);
    }
  }, []);

  return (
    <div className="login-container">
      {/* Logo Section */}
      <div className="logo-wrap">
        <img src={logo} alt="Your Logo" className="logo" />
        <h2>Login</h2>
      </div>
      <div className="login-form">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={handleLogin} className="login-button">
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
