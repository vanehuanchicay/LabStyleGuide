import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Buttons from './components/Buttons/Buttons';
import Form from './components/Form/Form';
import Text from './components/Text/Text';
import Colors from './components/Colors/Colors';
import Image from './components/Image/Image';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

import logolab from './images/logolab.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title"><img className="logo-tittle" src={ logolab } alt="logo"/><br/>Style Guide</h3>
        </header>
        <NavBar></NavBar>
        <Buttons></Buttons>
        <Form></Form>
        <Image></Image>
        <Card></Card>
        <Text></Text>
        <Colors></Colors>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
