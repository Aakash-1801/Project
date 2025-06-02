import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="profile.png" alt="Profile" className="profile-pic" />
        <span className="profile-name">Slug name</span>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Support">Support</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
