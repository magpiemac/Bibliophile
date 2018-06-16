import React from 'react';

const BookCard = ({ book }) => (
  <div key={book.id} className="BookCard">
  <h3>{book.title} </h3>
  <button type="delete">Delete Book</button>
  <button type="edit">Edit Book</button>
  <p>Author: {book.author}</p>
  <p>Notes: {book.notes}</p>
  <p>Status: {book.status}</p>
  <img className="BookImage" src={book.img_url} alt={book.name} />
  </div>
)

export default BookCard;
