import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Pop.css';

function Popular(props) {
  const [opportunities, setOpportunities] = useState([]);
  // const [top8, settop8] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const res = await fetch(`http://localhost:5000/api/getalljobs?n=${props.n}`);
      const data = await res.json();
      setOpportunities(data);
      // settop8(opportunities.slice(0, 8));
      // const top8 = data.slize(0, 8);
      // setOpportunities(top8);
    };
    fetchOpportunities();
  }, [props.n]);
  return (
    <div className="pop">
      {opportunities.map((item, index) => (
        <div className="pop-card" key={index}>
          <div className="pop-up">{item.opportunity}</div>
          <Link
            to={`/opportunity/${encodeURIComponent(item.opportunity)}`}
            className="pop-down"
          >
            View
          </Link>
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
