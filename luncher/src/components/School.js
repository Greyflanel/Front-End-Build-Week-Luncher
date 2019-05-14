import React, {Component} from 'react';
import axios from 'axios';
// import SchoolCard from './SchoolCard';

class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: ''
        };
    }




fetchSchool = id => {
    axios
    .get(`https://luncher-backend.herokuapp.com/api/school/6`)
    .then(response => {
        console.log(response);
        
        this.setState(() => ({ school: response.data }));
    })
    .catch(error => {
        console.log(error)
    })
};

render() {
    console.log(this.state);
    
    return (
        <div>
            
            </div>
    
    
)
}
}
export default School;
