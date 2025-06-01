import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import FrontPage from './FrontPage/FrontPage';
import Milestones from './Milestones/Milestones';
import Popular from './Milestones/Popular';

function App() {
  return (
    <div>
      <Navbar />
      <FrontPage />
      <Milestones />

      <h1 id='cat'>Popular catagories</h1>

      <Popular />
    </div>
  );
}

export default App;
