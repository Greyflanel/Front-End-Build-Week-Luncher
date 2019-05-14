import React, {Component} from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: ''
        };
    }




fetchSchool = id => {
    axios
    .get(`https://luncher-backend.herokuapp.com/api/schools/${this.props.match.params.id}`)
    .then(response => {
        console.log(response); 
        this.setState({ school: response.data });
    })
    .catch(error => {
        console.log(error)
    })
};
componentDidMount(){
    this.fetchSchool()
}
render() {
    console.log(this.state);
    
    return (
        <div>
            <NavLink exact to={`/school-list/school/${this.state.school.id}`}>
        <button>Donate</button>
      </NavLink>
      
            </div>
    
    
)
}
}
export default School;
