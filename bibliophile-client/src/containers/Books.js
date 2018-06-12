import React, { Component } from 'react';
import './Books.css';
import BookCard from '../components/BookCard';
import BookForm from './BookForm';

class Books extends Component {

  // constructor(props){
  //   super(props)
  //
  //   this.state
  // }

  render() {
    return(
      <div className="BooksContainer">
        <h3>Books Component</h3>
        {this.props.books.map(book => <BookCard key={book.id} book={book} />)}
        <BookForm />
      </div>
    );
  }
}

export default Books;
