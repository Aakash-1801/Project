import React, { useState, useEffect } from 'react';
import BrowseList from './BrowseList';
import BrowseDetails from './BrowseDetails';
import './Browse.css';

function Browse() {
  const [filters, setFilters] = useState({
    type: '',
    mode: '',
    tag: ''
  });
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelectedItem(null);
  }, [filters]);

  return (
    <div className="browse-page">
      <div className="browse-container">
        <div className="browse-body">
          <div className="browse-left">
            <div className="filter-section">
              <h3>Filter By</h3>

              <label>Type</label>
              <select
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                value={filters.type}
              >
                <option value="">All</option>
                <option value="Job">Job</option>
                <option value="Internship">Internship</option>
                <option value="Summer Internship">Summer Internship</option>
              </select>

              <label>Work Mode</label>
              <select
                onChange={(e) => setFilters({ ...filters, mode: e.target.value })}
                value={filters.mode}
              >
                <option value="">All</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
              </select>

              <label>Tag</label>
              <select
                onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
                value={filters.tag}
              >
                <option value="">All</option>
                <option value="Frontend">Frontend</option>
                <option value="Web">Web</option>
                <option value="Responsive Design">Responsive Design</option>
                <option value="ML">ML</option>
                <option value="AI">AI</option>
                <option value="MBA">MBA</option>
                <option value="Analytics">Analytics</option>
                <option value="Backend">Backend</option>
              </select>
            </div>

            <BrowseList filters={filters} onSelect={setSelectedItem} />
          </div>

          <div className="browse-right">
            <BrowseDetails item={selectedItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
