import React, { Component } from 'react';
import './App.css';
import Books from './Books';
import CustomNavbar from '../components/CustomNavbar';


class App extends Component {

  render() {
    return (
      <div>
        <CustomNavbar />
        <div className="container">
          <h1>Bibliophile: for the Obsessive Book Lover</h1>
          <div className="App">
            <Books />
          </div>
       </div>
     </div>
   );
  }
}

export default App;
