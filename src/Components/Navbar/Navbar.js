import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const location = useLocation();

  useEffect(() => {
    // Find active link inside navbar-right
    const activeLink = navRef.current.querySelector('.active-link');
    if (activeLink) {
      setUnderlineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="profile.png" alt="Profile" className="profile-pic" />
        <span className="profile-name">Slug name</span>
      </div>
      <div className="navbar-right" ref={navRef}>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to="/Support" className={({ isActive }) => isActive ? "active-link" : ""}>Support</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>

        <span
          className="sliding-underline"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
