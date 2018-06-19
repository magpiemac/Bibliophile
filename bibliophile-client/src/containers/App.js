import React, { Component }from 'react';
import {
  Router,
  Route, Switch
} from 'react-router-dom';
import './App.css';
import Books from './Books';
import CustomNavbar from '../components/CustomNavbar';
import About from '../components/About';
import Home from '../components/Home';
import BookEdit from '../components/BookEdit';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <div >
            <Router history={history}>
                <div>

                    <CustomNavbar />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/books" component={Books} />
                        <Route path="/book/:id" component={BookEdit} />
                        <Route path="/about" component={About} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
  };
}
export default App;
