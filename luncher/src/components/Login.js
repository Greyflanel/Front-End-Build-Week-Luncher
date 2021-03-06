import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        loginPassword: "",
        newUserName: "",
        newPassword: ""

    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  adminLogin = (event) => {
    // axios.defaults.headers = {'Content-Type': 'application/json', Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJmaXJzdE5hbWUiOiJIYXJ2ZXkiLCJsYXN0TmFtZSI6IkpvbmVzIiwidXNlcm5hbWUiOiJoakBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NTgxMzUxNDYsImV4cCI6MTU1ODIyMTU0Nn0.uhBAQKjWM5XEU708bTDmDRIgajJ56rW65SBqqLpwuek'}
    event.preventDefault()
      const credentials = { email: this.state.email, password: this.state.loginPassword }
    axios
    .post("https://luncher-backend.herokuapp.com/api/login",  credentials)
    .then(response => {
      console.log(response.data);
      
      localStorage.setItem('userToken', response.data.token)
    })
    .catch(error => console.log(error));

   this.setState ({
      email: "",
      loginPassword: ""
  })
  }
  

  render() {
    return (
      <div className="logRegister">
        <div className="login">
          <strong>Sign In</strong>
        <form onSubmit={this.adminLogin}>
          <input type="text" placeholder=" email" onChange={this.handleInputChange} name="email" value={this.state.email} />
          <input type="text" placeholder=" password" onChange={this.handleInputChange} name="loginPassword" value={this.state.loginPassword} />
          <button>login</button>
          </form>
        </div>
        <div>
        <div className="register">
          <strong>Register</strong>
        <form>
          <input type="text" placeholder=" New user name" onChange={this.handleInputChange} name="newUserName" value={this.state.newUserName} />
          <input type="text" placeholder=" password" onChange={this.handleInputChange} name="newPassword" value={this.state.newPassword} />
          <button>register</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}
export default Login;
