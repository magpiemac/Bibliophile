import React from 'react';
//import './App.css';
import './Books.css';
import BookCard from '../components/BookCard';

const Books = (props) => (
  <div className="BooksContainer">
    <h3>Books Component</h3>
    {props.books.map(book => <BookCard key={book.id} book={book} />)}
  </div>
);

export default Books;
