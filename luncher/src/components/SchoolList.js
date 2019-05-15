import React, { Component } from 'react';
import axios from 'axios';
import SchoolCard from './SchoolCard';

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

render() {
    console.log(this.state)
    return (
        <div className="school-list">
        {this.state.schools.map(school => (
            <SchoolCard key={school.id} school={school} />
        ))}

        </div>
    )
}

}
export default SchoolList;