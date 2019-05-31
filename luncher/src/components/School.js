import React, { Component } from "react";
import axios from "axios";
import DeleteForm from './DeleteForm';

class School extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: ""
    };
  }
  componentDidMount() {
    this.fetchSchool();
  }

  fetchSchool = () => {
    axios
      .get(`https://luncher-backend.herokuapp.com/api/schools/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ school: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteSchool = event => {
  
   axios
   .delete(`https://luncher-backend.herokuapp.com/api/admin/${this.props.match.params.id}`)
   .then(response => this.setState({school: response.data}))
    .catch(error => console.log(error));
    event.preventDefault();
    }

    putSchool = () => {
      const updateSchool = {
       schoolName: this.state.newSchoolName,
       contact: this.state.newContact,
       state: this.state.newState,
       zip: this.state.newZip,
       fundsNeeded: this.state.newFundsNeeded
       
     }

   axios
   .put(`https://luncher-backend.herokuapp.com/api/schools/${this.props.match.params.school.id}`, updateSchool)
   .then(response =>  this.setState({school: response.data}))
   .catch(error => console.log(error));
   
   }
   
  

  render() {
      // console.log(this.props.school);
      
    return (
      <div className="school-container">
          <DeleteForm deleteSchool={this.deleteSchool}/>
        <div className="school">
          <h3>{this.state.school.schoolName}</h3>
          <strong>{this.state.school.contact}</strong>
          <p>
            {this.state.school.state} {``}
          </p>
          {this.state.school.zip} <br />
          <p>funds needed:</p>${this.state.school.fundsNeeded} <br />
          {this.state.school.schoolName}
        </div>
      </div>
    );
  }
}
export default School;
