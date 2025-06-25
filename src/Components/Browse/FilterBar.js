import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FilterBar.css';

function FilterBar({ filters, setFilters }) {
  const [options, setOptions] = useState({
    type: [],
    mode: [],
    tag: [],
    category: [],
    eligibility: [],
    location: []
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/opportunity/filters')
      .then(res => setOptions(res.data || {}))
      .catch(err => console.error('Failed to load filter options', err));
  }, []);

  const update = (key, val) => setFilters({ ...filters, [key]: val });

  return (
    <div className="filter-bar">
      {['type', 'mode', 'category', 'eligibility', 'location', 'tag'].map((field) => (
        <select
          key={field}
          value={filters[field] || ''}
          onChange={(e) => update(field, e.target.value)}
        >
          <option value="">{field.charAt(0).toUpperCase() + field.slice(1)}</option>
          {(options[field] || []).map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      ))}
        <button className="clear-btn" onClick={() =>
            setFilters({
                type: '',
                mode: '',
                category: '',
                eligibility: '',
                location: '',
                tag: ''
            })
            }>
            Clear Filters
        </button>

    </div>
  );
}

export default FilterBar;
