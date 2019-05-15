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


    fetchSchool = id => {
        axios
        .get(`https://luncher-backend.herokuapp.com/api/schools/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ school: response.data }, id);
        })
        .catch(error => {
            console.log(error)
        })
    }
  
    
    render() {
        console.log(this.state);
        
        return (
            <div>
        </div>
            
        )
    }
}
export default School;