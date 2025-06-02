import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="profile.png" alt="Profile" className="profile-pic" />
        <span className="profile-name">Slug name</span>
      </div>
      <div className="navbar-right">
        {/* <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/About')}>About</button>
        <button onClick={() => navigate('/Contact')}>Contact</button> */}
        <span>Home</span>
        <span>About</span>
        <span>Support</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}

export default Navbar;