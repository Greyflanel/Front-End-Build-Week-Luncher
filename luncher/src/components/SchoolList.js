import React, { Component } from 'react';
import SchoolCard from './SchoolCard';
import axios from 'axios';

class SchoolList extends Component {
constructor() {
    super();
    this.state = {
        schools: []
    };
}

componentDidMount() {
    axios
    .get('https://luncher-backend.herokuapp.com/api/schools')
    .then(response => {
        this.setState(() => ({schools: response.data}));
    })
    .catch(error => {
      console.log('Server Error', error);
    });
}

render() {
    console.log(this.state);
    return (
        <div className="school-list">
{this.state.schools.map(school => (
    <SchoolCard key={school.id} school={school}/>
))}
        </div>
    )
}
}

export default SchoolList;
