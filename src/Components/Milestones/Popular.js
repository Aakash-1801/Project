import React from 'react';
import { Link } from "react-router-dom";
import './Pop.css';

function Popular() {
  const companies = ['Company', 'You', 'Will', 'Find'];

  return (
    <div className='popular'>
      {companies.map((company, index) => (
        <div className='pop' key={index}>
          <div id='up'>{company}</div>
          <Link to="/company" id='down'>1000</Link>
        </div>
      ))}
    </div>
  );
}

export default Popular;
