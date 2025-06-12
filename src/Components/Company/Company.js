import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Company.css';

function Company() {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div className="page-container">
      <div className="company-wrapper">
        <div className="company-header">
          <div className="logo">
            <img src="amd.png" alt="AMD Logo" />
          </div>
          <div className="company-name">
            <h2>{name || "No company selected"}</h2>
            <p>Company Tagline</p>
          </div>
        </div>
        <div className="company-description">
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="company-description">
          <h1>Eligibility</h1>
          <p>
            You are aligible to apply if you are a student of any college or university in India. You must be a full-time student and should not be working anywhere else. You must have a valid email address and phone number for communication purposes.
          </p>
        </div>
        <div className="info-card">
          <div className="info-text">
            <p className="info-label">Job Location(s)</p>
            <p className="info-value">Gurgaon</p>
          </div>
          <div className="info-icon">
            <img src="l_ocation.png" alt="Location" />
          </div>
        </div>
        <div className="info-card">
          <div className="info-text">
            <p className="info-label">Salary</p>
            <p className="info-value">10,000,000</p>
          </div>
          <div className="info-icon">
            <img src="Salary.png" alt="Salary" />
          </div>
        </div>
        <div className="info-card">
          <div className="info-text">
            <p className="info-label">Work details</p>
            <p className="info-value"><b>Working hours: </b>5 days</p>
          </div>
          <div className="info-icon">
            <img src="work.png" alt="Location" />
          </div>
        </div>
        <Link to="/register" id="register">Apply Here</Link>
      </div>
    </div>
  );
}

export default Company;