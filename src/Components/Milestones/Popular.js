// import React, {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";
// import './Pop.css';

// function Popular(props) {
//   const [opportunities, setOpportunities] = useState([]);

//   useEffect(() => {
//     const fetchOpportunities = async () => {
//       const res = await fetch(`http://localhost:5000/api/getall${props.a}?n=${props.n}`);
//       const data = await res.json();
//       setOpportunities(data);
//     };
//     fetchOpportunities();
//   }, [props.n, props.a]);
//   return (
//     <div className="pop">
//       {opportunities.map((item, index) => (
//         <div className="pop-card" key={index}>
//           {/* <div className="pop-up">{item.opportunity}</div> */}
//           <div className="pop-up">{props.a === 'jobs' ? item.opportunity : item.company}</div>
//           {props.a === 'jobs' && <Link
//             to={`/opportunity/${encodeURIComponent(item.opportunity)}`}
//             className="pop-down"
//           >
//             View
//           </Link>}
//           {/* {props.a == 'companies'} */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Popular;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pop.css";

const quickFilters = [
  { label: "Computer", value: "Computer", icon: "💻" },
  { label: "Data Science", value: "Data Science", icon: "📊" },
  { label: "AI", value: "AI", icon: "🧠" },
  { label: "Frontend", value: "Frontend", icon: "🎨" },
];

function Popular() {
  const navigate = useNavigate();

  const handleQuickFilterClick = (tag) => {
    navigate(`/browse?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="quick-filter-section">
      <div className="quick-filter-container">
        {quickFilters.map((filter) => (
          <button
            key={filter.value}
            className="quick-filter-button"
            onClick={() => handleQuickFilterClick(filter.value)}
          >
            <span className="quick-filter-icon">{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Popular;
