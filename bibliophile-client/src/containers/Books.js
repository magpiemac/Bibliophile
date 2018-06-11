import React from 'react';
//import './App.css';
import './Books.css';

const Books = (props) => (
  <div className="BooksContainer">
    <h3>Books Component</h3>
    {props.books.map(book =>
      <div key={book.id} className="BookCard">
      <h3>{book.title} </h3>
      <p>Author: {book.author}</p>
      <p>Notes: {book.notes}</p>
      <p>Status: {book.status}</p>
      <img className="BookImage" src={book.img_url} alt={book.name} />
      </div>
    )}
  </div>
);

export default Books;
