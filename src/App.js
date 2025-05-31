import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      <div className="main-container">
        <div className="left-content">
          <h1>ndbvf hhbsd mhbj nvh</h1>
          <p>
            Focus on your carrier not other's repositories Focus on your carrier not other's repositories Focus on your carrier not other's repositories Focus on your carrier not other's repositories Focus on your carrier not other's repositories 
          </p>
        </div>
        <div className="right-content">
          <img src="/job-front.jpg" alt="Job" className="job-image" />
        </div>
      </div>

      <div className='milestone'>
        <div className='mlstn1'>
          <div id='up'>Welcome</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>To</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>My</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>Private</div>
          <div id='down'>1000</div>
        </div>
      </div>

      <h1 id='cat'>Popular catagories</h1>

      <div className='popular'>
        <div className='mlstn1'>
          <div id='up'>Company</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>You</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>Will</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>Find</div>
          <div id='down'>1000</div>
        </div>
      </div>
      <div className='popular'>
        <div className='mlstn1'>
          <div id='up'>No</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>One</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>Else</div>
          <div id='down'>1000</div>
        </div>
        <div className='mlstn1'>
          <div id='up'>Here</div>
          <div id='down'>1000</div>
        </div>
      </div>
    </div>
  );
}

export default App;
