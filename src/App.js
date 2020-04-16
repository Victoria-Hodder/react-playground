import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component {
    render () {
      return (
      <div className="App">
        <NameList />
      </div>
    );
  }
}

export default App