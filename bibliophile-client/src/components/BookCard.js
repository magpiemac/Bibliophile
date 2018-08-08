import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../actions/books';

class BookCard extends Component {

  onClick = event => {
    event.preventDefault()
    this.props.deleteBook(this.props.bookFormData)
  }

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
        <img className="img-responsive" src={book.img_url} alt={book.name} />

        <button className="btn btn-secondary btn-med m-2" type="submit">Edit Book</button>
        <button className="btn btn-secondary btn-med m-2" onClick={deleteBook}>Delete Book</button>
        </div>
        )
    }
}


export default BookCard;
