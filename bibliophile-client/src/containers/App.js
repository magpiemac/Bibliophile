import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Books from './Books';
import CustomNavbar from '../components/CustomNavbar';
import About from '../components/About';
import Home from '../components/Home';
import Book from '../components/Book';


class App extends Component {

  render() {
    return (
        <Router>
              <div className="App">
              <CustomNavbar />
              <Route path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/books/:id" component={Book} />
              </div>
        </Router>

   );
  }
}

export default App;
