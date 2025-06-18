import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Browse.css';

function Browse() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const res = await fetch('http://localhost:5000/api/getalljobs');
      const data = await res.json();
      setOpportunities(data);
    };
    fetchOpportunities();
  }, []);

  return (
    <div className="browse">
      {opportunities.map((item, index) => (
        <div className="browse-card" key={index}>
          <div className="browse-up">{item.opportunity}</div>
          <Link
            to={`/opportunity/${encodeURIComponent(item.opportunity)}`}
            className="browse-down"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Browse;
