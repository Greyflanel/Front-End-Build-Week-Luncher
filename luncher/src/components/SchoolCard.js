import React from "react";
import { NavLink } from "react-router-dom";

const SchoolCard = props => {
  console.log(props);

  return (
    <div className="school-card" >
     
     {/* <NavLink to={`/school-list/schools/${props.school.id}`}>
        <button>Donate</button>
      </NavLink>
      <h3>{props.school.schoolName}</h3>
      <h4>{props.school.contact}</h4>
      <p>
        {props.school.state} -{props.school.zip}-
      </p>
      <h6>
        funds needed: <br /> ${props.school.fundsNeeded}
      </h6> */}
    </div>
  );
};
export default SchoolCard;
