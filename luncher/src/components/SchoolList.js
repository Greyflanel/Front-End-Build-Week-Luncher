import React, { Component } from 'react';
import SchoolCard from './SchoolCard';
import axios from 'axios';

class SchoolList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: []
        }
    }
componentDidMount() {
    axios
    .get('https://luncher-backend.herokuapp.com/api/schools')
    .then(response => {
        this.setState({schools: response.data});
    })
    .catch(error => {
        console.log('Server Error', error);
    }) 
}
handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    
render() {
    console.log(this.state)
    return (
        <div className="school-list">
        {this.state.schools.map(school => (
            <SchoolCard key={school.id} school={school} />
        ))}
<div>
          <h3>Add your school</h3>
          <div>
            <form onSubmit={this.addSchool}>
              <input
                onChange={this.handleInputChange}
                value={this.state.schoolName}
                placeholder="School Name"
                name="schoolName"
              />
               <input
                onChange={this.handleInputChange}
                value={this.state.contact}
                placeholder=" email address"
                name="contact"
              />
               <input
                onChange={this.handleInputChange}
                value={this.state.state}
                placeholder=" State"
                name="state"
              />
               <input
                onChange={this.handleInputChange}
                value={this.state.zip}
                placeholder=" zip code"
                name="zip"
              />
               <input
                onChange={this.handleInputChange}
                value={this.state.fundsNeeded}
                placeholder=" Funds needed"
                name="funds-needed"
              />
              <button type="submit" onClick={this.addSchool}> Add a new school</button>
            </form>
            </div>
          </div>
        </div>
    )
}

}
export default SchoolList;