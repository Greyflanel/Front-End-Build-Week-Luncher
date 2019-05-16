import React from "react";
import { NavLink } from "react-router-dom";

const SchoolCard = props => {
  // console.log(props);
  return (
    <div className="card-container">
    <div className="school-card">
      <h3>{props.school.schoolName}</h3>
      <strong>{props.school.contact}</strong>
      <p>
        {props.school.state} {``}
      </p>
      {props.school.zip} <br />
      <p>funds needed: </p>${props.school.fundsNeeded} 
      <NavLink to={`/school-list/school/${props.school.id}`}>
        {" "}
        <button>Donate</button>
      </NavLink>
    </div>
    </div>
  );
};
export default SchoolCard;
