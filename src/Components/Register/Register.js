import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <h1 className="register-heading">Registration Form</h1>
      <form className="register-form">
        <input type="text" placeholder="Full Name" className="register-input" />
        <input type="text" placeholder="Education" className="register-input" />
        <input type="text" placeholder="Stream" className="register-input" />
        <input type="email" placeholder="Email Address" className="register-input" />
        <input type="password" placeholder="Password" className="register-input" />

        <h3 className="resume-up">Upload your resume</h3>
        <input type="file" name="upload" />

        {/* Checkbox */}
        <div className="checkbox-wrapper-12">
          <div className="cbx">
            <input type="checkbox" id="cbx-12"/>
            <label htmlFor="cbx-12"></label>
            <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
              <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
          </div>

          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo-12">
                <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic" />
                <feColorMatrix
                  result="goo-12"
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                />
                <feBlend in="SourceGraphic" in2="goo-12" />
              </filter>
            </defs>
          </svg>
          <div>
            <label htmlFor="cbx-12" className="checkbox-label">
              I agree to the terms and conditions
            </label>
          </div>
        </div>

        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default Register;
