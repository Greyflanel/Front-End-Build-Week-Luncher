import React from "react";
import { NavLink } from "react-router-dom";
import SchoolList from "./SchoolList";

const SchoolCard = props => {
  console.log(props.school);

  return (
    <div className="school-card" >
      <NavLink to='/'>
        <button>Donate</button>
      </NavLink>
      <h3>{props.schoolName}</h3>
      <h4>{props.contact}</h4>
      <p>
        {props.state} -{props.zip}-
      </p>
      <h6>
        funds needed: <br /> ${props.fundsNeeded}
      </h6>
    </div>
  );
};
export default SchoolCard;
