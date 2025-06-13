import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Components/FrontPage/FrontPage';
import Milestones from './Components/Milestones/Milestones';
import Popular from './Components/Milestones/Popular';
import About from './Components/Pages/About/About';
import Support from './Components/Pages/Support/Support';
import Contact from './Components/Pages/Contact/Contact';
import Register from './Components/Register/Register';
import Company from  './Components/Company/Company';
import Footer from './Components/Footer/Footer';
import Browse from './Components/Browse/Browse';
import Dropdown from './Components/Navbar/Dropdown';
import Profile from './Components/Pages/Profile/Profile';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='appp'>
      {/* <Navbar
        onProfileClick={toggleDropdown}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      /> */}
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        onProfileClick={toggleDropdown}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
      {dropdownOpen && <Dropdown />}
      <Routes>
        <Route path="/" element={
          <>
            <FrontPage />
            <Milestones />
            <h1 id="cat">Popular categories</h1>
            <Popular />
            <Popular />
            <h1 id="cat">Top Companies</h1>
            <Popular />
          </>
        } />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;