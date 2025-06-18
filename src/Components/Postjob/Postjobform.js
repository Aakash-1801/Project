import React, { useState } from 'react';
import './Postjobform.css';

function PostJobForm() {
  const [form, setForm] = useState({
    opportunity: '',
    company: '',
    description: '',
    eligibility: '',
    location: '',
    annual_salary_min: '',
    annual_salary_max: '',
    work_details: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.opportunity || !form.location) {
      setMessage('Opportunity and location are required');
      return;
    }
    if (form.annual_salary_max < form.annual_salary_min) {
      setMessage('Max salary must be greater than or equal to min salary');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/postjob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Career opportunity created successfully!');
        setForm({
          opportunity: '',
          company: '',
          description: '',
          eligibility: '',
          location: '',
          annual_salary_min: '',
          annual_salary_max: '',
          work_details: '',
        });
      } else {
        setMessage(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error');
    }
  };

  return (
    <div className="job-post-form">
      <h2>Post a Career Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <input name="opportunity" placeholder="Opportunity *" value={form.opportunity} onChange={handleChange} required />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" value={form.description} onChange={handleChange}></textarea>
        <input name="eligibility" placeholder="Eligibility" value={form.eligibility} onChange={handleChange} />
        <input name="location" placeholder="Location *" value={form.location} onChange={handleChange} required />
        <input name="annual_salary_min" type="number" placeholder="Min Salary (₹)" value={form.annual_salary_min} onChange={handleChange} />
        <input name="annual_salary_max" type="number" placeholder="Max Salary (₹)" value={form.annual_salary_max} onChange={handleChange} />
        <textarea name="work_details" placeholder="Work Details" value={form.work_details} onChange={handleChange}></textarea>

        <button type="submit">Post Job</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default PostJobForm;
