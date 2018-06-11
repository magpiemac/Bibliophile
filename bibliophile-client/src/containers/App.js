import React, { Component } from 'react';
import './App.css';
import Books from './Books';
import CustomNavbar from '../components/CustomNavbar';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('${API_URL}/books')
    .then(response => response.json())
    .then(books => this.setState({ books }))
  }

  render() {
    return (
      <div>
        <CustomNavbar />
        <div className="container">
          <h1>Bibliophile: for the Obsessive Book Lover</h1>
          <div className="App">
            <Books books={this.state.books} />
          </div>
       </div>
     </div>
   );
  }
}

export default App;
