import React, { Component } from 'react';
import Buttons from './components/Buttons/Buttons';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Laboratoria Style Guide</h1>
        </header>
        <Buttons></Buttons>
        <NavBar></NavBar>
        <Form></Form>
        
      </div>
    );
  }
}

export default App;

