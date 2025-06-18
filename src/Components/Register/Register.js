import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

function Register() {
  const location = useLocation();
  const opportunity = location.state?.opportunity || "N/A";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    // dob: '',
    gender: '',
    qualification: '',
    stream: '',
    cgpa: '',
    opportunity: '',
    // resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.opportunity = opportunity;
    try {
      const res = await axios.post('http://localhost:5000/api/registration', formData);
      alert(res.data.message || 'Registration successful!');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Something went wrong during registration.');
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-heading">Registration Form</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" className="register-input" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="register-input" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" className="register-input" required onChange={handleChange} />
        {/* <input type="date" name="dob" placeholder="Date of Birth" className="register-input" required onChange={handleChange} /> */}
        
        <select name="gender" className="register-input" required onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input type="text" name="qualification" placeholder="Highest Qualification" className="register-input" required onChange={handleChange} />
        <input type="text" name="stream" placeholder="Stream / Major" className="register-input" required onChange={handleChange} />
        <input type="number" step="0.01" name="cgpa" placeholder="CGPA" className="register-input" required onChange={handleChange} />
        {/* <input type="text" name="opportunity" placeholder="Opportunity Name" className="register-input" required onChange={handleChange} /> */}
        <input type="hidden" name="opportunity" value={opportunity} />
        {/* <label className="resume-up">Upload Resume (PDF/DOC):</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" required onChange={handleChange} /> */}
        <div className="checkbox-wrapper-12">
          <div className="cbx">
            <input type="checkbox" id="cbx-12" required />
            <label htmlFor="cbx-12"></label>
            <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
              <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
          </div>

          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo-12">
                <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic" />
                <feColorMatrix result="goo-12" in="blur" type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" />
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

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;