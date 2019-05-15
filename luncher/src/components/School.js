import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SchoolCard from './SchoolCard';


class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: ''
        }
    }
    componentDidMount() {
        this.fetchSchool()
    }


    fetchSchool = () => {
        axios
        .get(`https://luncher-backend.herokuapp.com/api/schools/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ school: response.data });
        })
        .catch(error => {
            console.log(error)
        })
    }
  
    render() {
        return (
            <div className='school'>
                {this.state.school.schoolName}
            </div>
            
        )
    }
}
export default School;