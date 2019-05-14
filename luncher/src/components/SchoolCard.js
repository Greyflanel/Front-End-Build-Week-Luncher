import React from 'react';
import { Link } from 'react-router-dom';

const SchoolCard =(props) => {

    return (
       <div>
           <h3>{props.school.schoolName}</h3>
           <h4>{props.school.contact}</h4>
        <p>{props.school.state} - 
          {props.school.zip}-</p> 
          <h6>funds needed: <br/> ${props.school.fundsNeeded}</h6> 
       </div>
    )
}
export default SchoolCard;