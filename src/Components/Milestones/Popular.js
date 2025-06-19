import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Pop.css';

function Popular(props) {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const res = await fetch(`http://localhost:5000/api/getall${props.a}?n=${props.n}`);
      const data = await res.json();
      setOpportunities(data);
    };
    fetchOpportunities();
  }, [props.n, props.a]);
  return (
    <div className="pop">
      {opportunities.map((item, index) => (
        <div className="pop-card" key={index}>
          {/* <div className="pop-up">{item.opportunity}</div> */}
          <div className="pop-up">{props.a === 'jobs' ? item.opportunity : item.company}</div>
          {props.a === 'jobs' && <Link
            to={`/opportunity/${encodeURIComponent(item.opportunity)}`}
            className="pop-down"
          >
            View
          </Link>}
          {/* {props.a == 'companies'} */}
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
