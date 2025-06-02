// import React from 'react';
// import './App.css';
// import Navbar from './Navbar/Navbar';
// import FrontPage from './FrontPage/FrontPage';
// import Milestones from './Milestones/Milestones';
// import Popular from './Milestones/Popular';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <FrontPage />
//       <Milestones />

//       <h1 id='cat'>Popular catagories</h1>

//       <Popular />

//       <h1 id='cat'>Top Companies</h1>

//       <Milestones />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FrontPage from './Components/FrontPage/FrontPage';
import Milestones from './Components/Milestones/Milestones';
import Popular from './Components/Milestones/Popular';
import About from './Components/Pages/About';
import Support from './Components/Pages/Support';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <FrontPage />
            <Milestones />
            <h1 id="cat">Popular categories</h1>
            <Popular />
            <h1 id="cat">Top Companies</h1>
            <Milestones />
          </>
        } />
        <Route path="/About" element={<About />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;