import React, { Component } from 'react';



class DeleteForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      school: '',
  schoolName: '',
  contact: '',
  state: '',
  zip: '',
  fundsNeeded: ''
      }
    }

    

    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    
    return (
        <div>
        <div>
          <div>
            <form className="deleteForm" onSubmit={this.deleteSchool}>
              <strong className="addTitle">Delete a school</strong>
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
              <button className="schoolButton" >  Delete  school</button>
            </form>
          </div>
        </div>    
        </div>
    )
  }
}
export default DeleteForm;