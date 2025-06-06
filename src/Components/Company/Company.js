import React from 'react';
import { Link } from 'react-router-dom';

function Company() {
  return (
    <div>
      <h2>Company Details</h2>
      <p>Here is the company information for all companies.</p>
      <Link to="/register">Apply Here</Link>
    </div>
  );
}

export default Company;
