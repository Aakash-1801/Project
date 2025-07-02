// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './Company.css';

// function Company() {
//   const { name } = useParams();
//   const [job, setJob] = useState(null);
//   const [error, setError] = useState('');

//   const renderSalary = () => {
//     if (job.annual_salary_min == null && job.annual_salary_max == null) {
//       return 'Not Disclosed';
//     } else if (job.annual_salary_min && job.annual_salary_max) {
//       if (job.annual_salary_min === 0 && job.annual_salary_max === 0) {
//         return 'Unpaid';
//       } else {
//         return `₹${job.annual_salary_min} – ₹${job.annual_salary_max}`;
//       }
//     } else if (job.annual_salary_min) {
//       if (job.annual_salary_min === 0) {
//         return 'Unpaid';
//       } else {
//         return `₹${job.annual_salary_min}`;
//       }
//     } else {
//       if (job.annual_salary_max === 0) {
//         return 'Unpaid';
//       } else {
//         return `₹${job.annual_salary_max}`;
//       }
//     }
//   };
  

//   useEffect(() => {
//     const fetchJob = async () => {
//       const apiUrl = `http://localhost:5000/api/getjob/${encodeURIComponent(name)}`;
//       console.log("Fetching from:", apiUrl);

//       try {
//         const res = await fetch(apiUrl);
//         const data = await res.json();

//         if (res.ok) {
//           setJob(data);
//         } else {
//           setError(data.message || 'Job not found');
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError('Error loading job');
//       }
//     };

//     fetchJob();
//   }, [name]);

//   if (error) return <p className="error-msg">{error}</p>;
//   if (!job) return <p className="loading-msg">Loading...</p>;

//   return (
//     <div className="page-container">
//       <div className="company-wrapper">
//         <div className="company-header">
//           <div className="logo">
//             <img src="/amd.png" alt="Company Logo" />
//           </div>
//           <div className="company-name">
//             <h2>{job.opportunity}</h2>
//             <p>{job.company || 'Company name not specified'}</p>
//           </div>
//         </div>

//         <div className="company-description">
//           <h1>Description</h1>
//           <p>{job.description || 'No description provided.'}</p>
//         </div>

//         <div className="company-description">
//           <h1>Eligibility</h1>
//           <p>{job.eligibility || 'Not specified.'}</p>
//         </div>

//         <div className="info-card">
//           <div className="info-text">
//             <p className="info-label">Job Location(s)</p>
//             <p className="info-value">{job.location}</p>
//           </div>
//           <div className="info-icon">
//             <img src="/l_ocation.png" alt="Location" />
//           </div>
//         </div>

//         <div className="info-card">
//           <div className="info-text">
//             <p className="info-label">Salary</p>
//             <p className="info-value">
//               {renderSalary()}
//             </p>
//           </div>
//           <div className="info-icon">
//             <img src="/Salary.png" alt="Salary" />
//           </div>
//         </div>

//         <div className="info-card">
//           <div className="info-text">
//             <p className="info-label">Work Details</p>
//             <p className="info-value">{job.work_details || 'N/A'}</p>
//           </div>
//           <div className="info-icon">
//             <img src="/work.png" alt="Work Details" />
//           </div>
//         </div>

//         <Link
//           to="/Register"
//           id="register"
//           state={{ opportunity: job.opportunity }}
//         >
//           Apply Here
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Company;