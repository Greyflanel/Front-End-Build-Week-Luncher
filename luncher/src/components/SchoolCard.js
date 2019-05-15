import React from 'react';
import { NavLink } from 'react-router-dom';
import School from './School';

const SchoolCard = props => {
console.log(props);

  return (
   
    <div className="school-card">

<h3>{props.school.schoolName}</h3>
<h5>{props.school.contact}</h5>
<span>{props.school.state} {``}</span>
{props.school.zip} <br/>
 <p>funds needed:  </p>${props.school.fundsNeeded} <br/>
 <NavLink to={`/school-list/school/${props.school.id}`}><button>Donate</button></NavLink> 
    </div>
  )
}
export default SchoolCard;