import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Buttons from './components/Buttons/Buttons';
import Form from './components/Form/Form';
import Text from './components/Text/Text';
import Colors from './components/Colors/Colors';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Laboratoria Style Guide</h1>
        </header>
        <NavBar></NavBar>
        <Buttons></Buttons>
        <Form></Form>
        <Text></Text>
        <Colors></Colors>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

