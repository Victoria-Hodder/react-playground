import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './appStyles.css';
import styles from './appStyles.module.css';

class App extends Component {
    render () {
      return (
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
    );
  }
}

export default App