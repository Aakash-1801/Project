import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BrowseDetails.css';

function BrowseDetails({loggedIn}) {
  const location = useLocation();
  const job = location.state?.item || null;
  if (!job) {
    return <div className="browse-details">Select an opportunity to view details.</div>;
  }

  const renderSalary = () => {
    if (job.annual_salary_min == null && job.annual_salary_max == null) {
      return 'Not Disclosed';
    } else if (job.annual_salary_min && job.annual_salary_max) {
      if (job.annual_salary_min === 0 && job.annual_salary_max === 0) {
        return 'Unpaid';
      } else {
        return `₹${job.annual_salary_min} – ₹${job.annual_salary_max}`;
      }
    } else if (job.annual_salary_min) {
      return job.annual_salary_min === 0 ? 'Unpaid' : `₹${job.annual_salary_min}`;
    } else {
      return job.annual_salary_max === 0 ? 'Unpaid' : `₹${job.annual_salary_max}`;
    }
  };

  return (
    <div className='rappr'>
      <div className="browse-details">
        <div className="company-header">
          <div className="logo">
            <img src={job.logo_url || '/amd.png'} alt="Company Logo" />
          </div>
          <div className="company-name">
            <h2>{job.opportunity}</h2>
            <p>{job.company || 'Company not specified'}</p>
          </div>
        </div>

        <div className="company-description">
          <h3>Description</h3>
          <p>{job.description || 'No description provided.'}</p>
        </div>

        <div className="company-description">
          <h3>Eligibility</h3>
          <p>{job.eligibility || 'Not specified.'}</p>
        </div>

        {job.technologies?.length > 0 && (
          <div className="company-description">
            <h3>Technologies Required</h3>
            <div className="tech-tags">
              {job.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}

        <div className="info-card">
          <div className="info-text">
            <p className="info-label">Location</p>
            <p className="info-value">
              {job.location || 'N/A'}
              {/* {job.mode ? ` (${job.mode})` : ''} */}
              {job.mode ? (job.location&&job.location!=='Remote' ? ` (${job.mode})` : '') : ''}
            </p>
          </div>
          <div className="info-icon">
            <img src="/l_ocation.png" alt="Location" />
          </div>
        </div>

        <div className="info-card">
          <div className="info-text">
            <p className="info-label">Salary</p>
            <p className="info-value">{renderSalary()}</p>
          </div>
          <div className="info-icon">
            <img src="/Salary.png" alt="Salary" />
          </div>
        </div>

        <div className="info-card">
          <div className="info-text">
            <p className="info-label">Work Details</p>
            <p className="info-value">
              {job.work_details || 'N/A'}
              {job.duration ? ` | Duration: ${job.duration}` : ''}
            </p>
          </div>
          <div className="info-icon">
            <img src="/work.png" alt="Work Details" />
          </div>
        </div>

        {job.last_date && (
          <div className="info-card">
            <div className="info-text">
              <p className="info-label">Last Date to Apply</p>
              <p className="info-value">
                {new Date(job.last_date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </p>
            </div>
            <div className="info-icon">
              <img src="/Clndr.png" alt="Deadline" />
            </div>
          </div>
        )}

        {job.contact_email && (
          <div className="info-card">
            <div className="info-text">
              <p className="info-label">Contact Email</p>
              <p className="info-value">{job.contact_email}</p>
            </div>
            <div className="info-icon">
              <img src="/email.png" alt="Email" />
            </div>
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          {loggedIn ? (
            <Link
            to='/Register'
            state={{opportunity: job.opportunity}}
            className="apply-btn"
          >
            Apply Now
          </Link>
            ) : (
            <div>
                <Link to='/login' className="apply-btn">
                  Login to apply
                </Link>  
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowseDetails;