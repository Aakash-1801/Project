import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <h1 className="register-heading">Registration Form</h1>
      <form className="register-form">
        <input type="text" placeholder="Full Name" className="register-input" />
        <input type="email" placeholder="Email Address" className="register-input" />
        <input type="password" placeholder="Password" className="register-input" />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default Register;
