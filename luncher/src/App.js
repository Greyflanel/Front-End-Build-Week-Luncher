import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SchoolList from './components/SchoolList';
import School from './components/School';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      school: ''
    }
  }

  render() {
    
    return (
      <div className="App">
        
        <h1>Luncher</h1> 
      <div>
        
      <Login />
        <nav>
          <NavLink activeClassName="nav" exact to='/school-list' activeStyle={{color: "red"}}> Home</NavLink>
          <Route exact path='/'/>
        </nav>
        
        </div>
      <Route exact path='/school-list' component={SchoolList}/>
        <Route exact path='/school-list/school/:id' render={(props) => <School {...props}/>} />

      </div>
    )
  }
}
export default App; 

// ```*Login Page* - After a "A school administrator (who has the ability to log in) logs in they'll be directed to a home page where they will see a list of schools in need. Donors do not need the ability to login. 
// *Navigation* - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.
// *Home Page  (For a school)* - If no profile is created, be sure to allow a school to create a profile and add it to the list of schools that need assistance. 
// *Single School Page* - An admin will be able to see their current funds and be able to add their needs for more funding, update and delete their profile and funding needs.
// *Home Page (For a donor)* - Contains a list of schools who have requested financial needs for their students. Each school is laid out in a grid format, with the name of the school, physical address/location of the school and a requested amount of funds that the school needs in order to provide lunches for their students

// *Stretch Goal:* Allow a 2nd user type (patrons) to login and donate to a school.``` 