import React, { Component } from 'react';
import './App.css';
import Books from './Books';
import CustomNavbar from '../components/CustomNavbar';

const books = [
  {
    title: "A New Hope",
    author: "Shannon McCormack",
    notes: "Great read.",
    status: "Done",
    img_url: "https://books.google.com/books/content?id=i3GGvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70w9faY3xBbKtdOVDIWQt7A46iSgZOLeVQBVegwSVMc_xa2Iwiou1ScbYiSaDOlr-jbFqVrgzgdI2QVskJ8BNxtTvZXBUYDEBlwPBG5f5IgprVXu-TFw3-dTzcjKtS6yGYlHuC3"
  },
  {
    title: "A New Hope",
    author: "Shannon McCormack",
    notes: "Great read.",
    status: "Done",
    img_url: "https://books.google.com/books/content?id=i3GGvgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70w9faY3xBbKtdOVDIWQt7A46iSgZOLeVQBVegwSVMc_xa2Iwiou1ScbYiSaDOlr-jbFqVrgzgdI2QVskJ8BNxtTvZXBUYDEBlwPBG5f5IgprVXu-TFw3-dTzcjKtS6yGYlHuC3"
  }
]


class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <div className="container">
          <h1>Bibliophile: for the Obsessive Book Lover</h1>
          <div className="App">
            <Books books={books} />
          </div>
       </div>
     </div>
   );
  }
}

export default App;
