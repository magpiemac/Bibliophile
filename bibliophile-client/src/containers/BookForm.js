import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBookFormData } from '../actions/bookForm'
import { createBook } from '../actions/books';

class BookForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentBookFormData = Object.assign({}, this.props.bookFormData, {
      [name]: value
    })
    this.props.updateBookFormData(currentBookFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createBook(this.props.bookFormData)
  }

  render() {
    const { title, author, notes, status, img_url } = this.props.bookFormData;
    return (
      <div>
        Add a Book
        <form>
          <div>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              onChange={this.handleOnChange}
              name='title'
              value={title}
            />
          </div>
          <div>
            <label htmlFor='author'>Author:</label>
            <input
              type='text'
              onChange={this.handleOnChange}
              name='author'
              value={author}
            />
          </div>
          <div>
            <label htmlFor='notes'>Notes:</label>
            <input
              type='text'
              onChange={this.handleOnChange}
              name='notes'
              value={notes}
            />
          </div>
          <div>
            <label htmlFor='status'>Status:</label>
            <input
              type='text'
              onChange={this.handleOnChange}
              name='status'
              value={status}
            />
          </div>
          <div>
            <label htmlFor='img_url'>Cover Image:</label>
            <input
              type='text'
              onChange={this.handleOnChange}
              name='img_url'
              value={img_url}
            />
          </div>

          <button type="submit">Add Book</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bookFormData: state.bookFormData
  }
}

export default connect (mapStateToProps, {
  updateBookFormData,
  createBook
})(BookForm);
