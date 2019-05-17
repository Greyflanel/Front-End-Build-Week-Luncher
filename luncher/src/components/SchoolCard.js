import React from "react";
import { NavLink } from "react-router-dom";

const SchoolCard = props => {
  // console.log(props);
  return (
    <div className="card-container">
<section>
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
        <button className="donateButton">Donate</button>
      </NavLink>
    </div>
    </section>
    </div>
  );
};
export default SchoolCard;
