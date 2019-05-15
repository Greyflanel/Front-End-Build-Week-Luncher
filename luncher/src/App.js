import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SchoolList from './components/SchoolList';
import School from './components/SchoolCard';
import SchoolCard from './components/SchoolCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      school: ''
    }
  }

  render() {
    console.log(this.props);
    
    
    return (
      <div className="App">
      <Route exact path='/' component={SchoolList}/>
        <Route path={'/school-list/school/:id'} component={SchoolCard} />
        
      </div>
    )
  }
}
export default App;