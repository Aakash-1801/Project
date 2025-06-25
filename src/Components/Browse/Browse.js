import React, { useState } from 'react';
import BrowseList from './BrowseList';
// import BrowseDetails from './BrowseDetails';
import FilterBar from './FilterBar';
import './Browse.css';

function Browse() {
  const [filters, setFilters] = useState({
    type: '',
    mode: '',
    category: '',
    eligibility: '',
    location: '',
    tag: ''
  });

  // const [selectedItem, setSelectedItem] = useState(null);

  // useEffect(() => {
  //   setSelectedItem(null);
  // }, [filters]);

  return (
    <div className="browse-page">
      <div className="browse-container">
        <div className="browse-body">
          <div className="browse-left">
            <FilterBar filters={filters} setFilters={setFilters} />
          </div>
          <div className="browse-right">
            <BrowseList filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
