import React, {Component} from 'react';
import axios from 'axios';
// import SchoolCard from './SchoolCard';

class School extends Component {
    constructor(props) {
        super();
        this.state = {
            school: ''
        };
    }




fetchSchool = id => {
    axios
    .get(`https://luncher-backend.herokuapp.com/api/schools/${id}`)
    .then(response => {
        this.setState(() => ({ school: response.data }));
    })
    .catch(error => {
        console.log(error)
    })
};

render() {
    console.log(this.props.school);
    
    return (
        <div>
            
            </div>
    
    
)
}
}
export default School;
