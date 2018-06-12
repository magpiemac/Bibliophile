import React, { Component } from 'react';
import './App.css';
import Books from './Books';
import CustomNavbar from '../components/CustomNavbar';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/books')
    .then(response => response.json())
    //.then(books => this.setState({ books }))
  }

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
