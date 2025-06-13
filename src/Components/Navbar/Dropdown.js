import React from 'react';
// import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown({setLoggedIn}) {
  return (
      <div className='sub-menu-wrap'>
          <div className='sub-menu'>
              <div className='user-info'>
                  <img src='profile.png' alt='photto' />
                  <h2>Slug name</h2>
              </div>
              <hr />
              <a href='/Profile' className='sub-menu-link'>
                  <img src='coll.png' alt='company' />
                  <p>My application</p>
                  <span>&gt;</span>
              </a>
              <a href='/Browse' className='sub-menu-link'>
                  <img src='info.png' alt='company' />
                  <p>About</p>
                  <span>&gt;</span>
              </a>
              <a href='/Browse' className='sub-menu-link'>
                  <img src='Adidas-Logo-1949.jpg' alt='company' />
                  <p>Support</p>
                  <span>&gt;</span>
              </a>
              <a href='/' className='sub-menu-link'>
                  <img src='logout.png' alt='company' />
                  <p onClick={() => setLoggedIn(false)}>Log Out</p>
                  <span>&gt;</span>
              </a>
          </div>
    </div>
  )
}

export default Dropdown;