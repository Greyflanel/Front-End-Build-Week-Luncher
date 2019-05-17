import React, { Component } from "react";
import SchoolCard from "./SchoolCard";
import axios from "axios";

class SchoolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],

      schoolName: "",
      contact: "",
      state: "",
      zip: "",
      fundsNeeded: ""
    };
  }
  // }
  componentDidMount() {
    axios
      .get("https://luncher-backend.herokuapp.com/api/schools")
      .then(response => {
        this.setState({ schools: response.data });
      })
      .catch(error => {
        console.log("Server Error", error);
      });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSchool = event => {
    console.log("school in state",this.state.schools);
    
    event.preventDefault();
    const newSchool = {
      schoolName: this.state.schoolName,
      contact: this.state.contact,
      state: this.state.state,
      zip: this.state.zip,
      fundsNeeded: this.state.fundsNeeded
    };

  //     deleteSchool = event => {
  //   event.preventDefault();
  //   console.log(this.state.school.id);
   
  //  axios
  //  .delete(`/school-list/school/${this.state.school.id}`)
  //  .then(response => this.setState({school: response.data}))
  //   .catch(error => console.log(error));
  //   }

    axios
      .post("https://luncher-backend.herokuapp.com/api/admin/school", newSchool)
      .then(response => this.setState({ schools: response.data }))
      .catch(error => console.log(error));

    this.setState({
      schoolName: "",
      contact: "",
      state: "",
      zip: "",
      fundsNeeded: ""
    });
  };

  render() {
    // console.log(this.school)
    return (
      <div className="school-list">
        <div>
          <div>
            <form className="addForm" onSubmit={this.addSchool}>
              <strong className="addTitle">Add your school</strong>
              <input
                onChange={this.handleInputChange}
                value={this.state.schoolName}
                placeholder=" School Name"
                name="schoolName"
              />
              <input onChange={this.handleInputChange} value={this.state.contact} placeholder=" email address" name="contact" />
              <input onChange={this.handleInputChange} value={this.state.state} placeholder=" State" name="state" />
              <input onChange={this.handleInputChange} value={this.state.zip} placeholder=" zip code" name="zip" />
              <input
                onChange={this.handleInputChange}
                value={this.state.fundsNeeded}
                placeholder=" Funds needed"
                name="fundsNeeded"
              />
              <button className="schoolButton" > Add a new school</button>
            </form>
          </div>
        </div>
        {this.state.schools.map(school => (
            <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    );
  }
}
export default SchoolList;
