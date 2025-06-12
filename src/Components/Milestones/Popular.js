import React from 'react';
import { Link } from "react-router-dom";
import './Pop.css';

function Popular() {
  const companies = ['Company 1', 'Company 2', 'Company 3', 'Company 4'];

  return (
    <div className='popular'>
      {companies.map((company, index) => (
        <div className='pop' key={index}>
          <div id='up'>{company}</div>
          <Link to="/company" id='down' state={{name:company}}>1000</Link>
        </div>
      ))}
    </div>
  );
}

export default Popular;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Pop.css';

// function Popular() {
//   const companies = ['Company', 'You', 'Will', 'Find'];
//   const navigate = useNavigate();

//   const handleclick = (compp) => {
//     navigate('/company', { state: { name: compp } });
//   }

//   return (
//     <div className='popular'>
//       {companies.map((compp, index) => (
//         <div className='pop' key={index}>
//           <div id='up'>{compp}</div>
//             {/* <Route path="/Company" id='down' element={<Company name={compp} />} /> */}
//             <button id='down' onClick={() => handleclick(compp)}>1000</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Popular;
