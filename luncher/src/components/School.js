import React, { Component } from "react";
import axios from "axios";

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

  addSchool = () => {
    const newSchool = {
      schoolName: this.state.schoolName,
      contact: this.state.contact,
      state: this.state.state,
      zip: this.state.zip,
      fundsNeeded: this.state.fundsNeeded
    };
    
    axios
      .post("https://luncher-backend.herokuapp.com/api/schools", newSchool)
      .then(response => this.setState({ schools: response.data }))
      .catch(error => console.log(error));

    this.setState({
      schoolName: "",
      contact: "",
      state: "",
      zip: null,
      fundsNeeded: null
    });
  };

  

  render() {
      
    return (
      <div className="school-container">
        <div className="school">
          <h3>{this.state.school.schoolName}</h3>
          <strong>{this.state.school.contact}</strong>
          <p>
            {this.state.school.state} {``}
          </p>
          {this.state.school.zip} <br />
          <p>funds needed:</p>${this.state.school.fundsNeeded} <br />
          
        </div>
      </div>
    );
  }
}
export default School;
