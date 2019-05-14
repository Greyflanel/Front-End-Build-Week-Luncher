import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SchoolList from './components/SchoolList';
import School from './components/School'
import SchoolCard from './components/SchoolCard';
class App extends Component {
  // cosntructor(props) {
  //   super(props);
  //   this.setState = {
  //     schools: []
  //   }
  // }
  render() {
  return (
    <div className="App">
    
    <SchoolList schools={this.props.schools}/>
    <Route path='/' component={SchoolCard}/>
      <Route exact path='/school-list/school/:id' component={ SchoolCard }/>
      <Route exact path='/school/single-school/:id' component={ School }/>
    </div>
  );
  }
}

export default App;
