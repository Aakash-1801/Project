import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar({ onProfileClick, dropdownOpen }) {
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const location = useLocation();

  useEffect(() => {
    const activeLink = navRef.current.querySelector(".active-link");
    if (activeLink) {
      setUnderlineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={onProfileClick}>
        <img src="profile.png" alt="Profile" className="profile-pic" />
        <span className="profile-name">Slug name</span>
        {dropdownOpen && <Dropdown />}
      </div>

      <div className="navbar-right" ref={navRef}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/Browse"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Browse
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/Support"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Support
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
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
