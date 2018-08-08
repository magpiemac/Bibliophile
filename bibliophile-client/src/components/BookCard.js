import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookCard extends Component {

  render() {
    const { book } = this.props
      return(
        <div key={book.id} className="BookCard">
        <h3 className="book-title">
            {book.id}. <Link to={`/books/${book.id}`} className="links">{book.title}</Link>
        </h3>
        <p>Author: {book.author}</p>
        <p>Notes: {book.notes}</p>
        <p>Status: {book.status}</p>
        <img className="BookImage" src={book.img_url} alt={book.name} />

        <button className="button" type="submit">Edit Book</button>
        <button className="button" onClick={removeBook}>Delete Book</button>

        </div>
        )
    }
}

const removeBook = () => {
    console.log("clicked")
}

export default BookCard;
