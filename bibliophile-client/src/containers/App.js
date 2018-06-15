import React, { Component } from 'react';
import './App.css';
import Books from './Books';
import CustomNavbar from '../components/CustomNavbar';
import About from '../components/About';
import Home from '../components/Home';
import Header from '../components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
          <CustomNavbar />
          <Books />
     </div>
   );
  }
}

export default App;
