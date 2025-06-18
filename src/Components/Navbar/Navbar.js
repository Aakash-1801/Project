import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar({ loggedIn, setLoggedIn, onProfileClick, dropdownOpen, setDropdownOpen }) {
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeLink = navRef.current?.querySelector('.active-link');
    if (activeLink) {
      setUnderlineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, setDropdownOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-left" ref={dropdownRef}>
        {loggedIn ? (
          <div
            className="navbar-left"
            onClick={onProfileClick}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onProfileClick()}
          >
            <img src="profile.png" alt="Profile" className="profile-pic" />
            <span className="profile-name">Slug name</span>
            {dropdownOpen && <Dropdown setLoggedIn={setLoggedIn} />}
          </div>
        ) : (
          <button className="login-button" onClick={() => navigate('/login')}>
            Login
          </button>
        )}
      </div>

      <div className="navbar-right" ref={navRef}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink>
        <NavLink to="/Browse" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Browse
        </NavLink>
        <NavLink to="/About" className={({ isActive }) => (isActive ? "active-link" : "")}>
          About
        </NavLink>
        <NavLink to="/Support" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Support
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Contact
        </NavLink>
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
