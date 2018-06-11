import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <div className="container">
          <h1>Bibliophile: the Obsessive Book Lover</h1>
          <img className = "" src="http://cdn01.wallconvert.com/_media/wallpapers_1920x1080/1/1/old-library-4190.jpg" alt="book" style={{ width:'100%' }}/>
       </div>
     </div>
   );
  }
}

export default App;
