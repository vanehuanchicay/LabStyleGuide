import React, { Component } from 'react';
import Buttons from './components/Buttons/Buttons';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Laboratoria Style Guide</h1>
        </header>
        <Buttons></Buttons>
        <Footer></Footer>
        
        
      </div>
    );
  }
}

export default App;

