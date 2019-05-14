import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import SchoolList from './components/SchoolList';

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
      {/* <Route exact path='/' component={ SchoolList }/> */}
    </div>
  );
  }
}

export default App;
