import React from 'react';
import { Link } from "react-router-dom";
import './Browse.css';

function Browse() {
  const companies = Array.from({ length: 25 }, (_, i) => ({
    name: `Company ${i + 1}`,
    views: Math.floor(Math.random() * 5000 + 1000),
  }));

  return (
    <div className='browse'>
      {companies.map((company, index) => (
        <div className='browse-card' key={index}>
          <div className='browse-up'>{company.name}</div>
          <Link to="/company" className='browse-down' state={{name:company.name}} >{company.views} views</Link>
        </div>
      ))}
    </div>
  );
}

export default Browse;
