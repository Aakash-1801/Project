import React from 'react';
import Navbar from './Navbar';
import './App.css'; // Make sure this CSS is imported

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="left-content">
          <h1>Find your dream job today</h1>
          <p>
            Welcome to JobSearch—your gateway to exciting career opportunities! Whether you're a fresh graduate, an experienced professional, or someone looking for a career shift, we've got thousands of job listings tailored just for you.
          </p>
        </div>
        <div className="right-content">
          <img src="/job-front.jpg" alt="Job" className="job-image" />
        </div>
      </div>

      <div className='milestone'>
        <div className='mlstn1'>jobs</div>
        <div className='mlstn1'>Companies</div>
        <div className='mlstn1'>employees</div>
        <div className='mlstn1'>users</div>
      </div>
    </div>
  );
}

export default App;
