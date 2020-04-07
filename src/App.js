import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';


class App extends Component {
    render () {
      return (
      <div className="App">
        <Greet name="Diana" heroName="Wonder Woman">
        <p>This is a children props</p>
        </Greet>
        <Greet name="Carol" heroName="Captain Marvel">
          <button>This is a button</button>
        </Greet>
        <Greet name="Natasha" heroName="Black Widow"/>

        <Welcome name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Carol" heroName="Captain Marvel"/>
        <Welcome name="Natasha" heroName="Black Widow"/>

        {/* <Hello /> */}
      </div>
    );
  }
}

export default App