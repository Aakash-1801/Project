import React from 'react';
import './Dropdown.css';

function Dropdown({ setLoggedIn }) {
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   setLoggedIn(false);
  // };

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('auth');
    setLoggedIn(false);
    window.location.href = '/Login';
  };
  

  return (
    <div className='sub-menu-wrap' role="menu">
      <div className='sub-menu'>
        <div className='user-info'>
          <img src='profile.png' alt='User' />
          <h2>Slug name</h2>
        </div>
        <hr />
        <a href='/Profile' className='sub-menu-link'>
          <img src='coll.png' alt='My application' />
          <p>My application</p>
          <span>&gt;</span>
        </a>
        <a href='/Browse' className='sub-menu-link'>
          <img src='info.png' alt='About' />
          <p>About</p>
          <span>&gt;</span>
        </a>
        <a href='/Postjob' className='sub-menu-link'>
          <img src='Adidas-Logo-1949.jpg' alt='Support' />
          <p>Post a Job</p>
          <span>&gt;</span>
        </a>
        <a href="/" className='sub-menu-link' onClick={handleLogout}>
          <img src='logout.png' alt='Logout' />
          <p>Log Out</p>
          <span>&gt;</span>
        </a>

      </div>
    </div>
  );
}

export default Dropdown;
