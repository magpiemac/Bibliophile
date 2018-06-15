import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './containers/App';
import Home from './components/Home';
import Books from './containers/Books';
import Book from './components/Book';


export default (
  <Route path="/" container={App}>
    <IndexRoute component={Home} />
    <Route path="/books" component={Books} />
  </Route>
);
