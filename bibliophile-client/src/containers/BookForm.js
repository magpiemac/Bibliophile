import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookForm extends Component {

  render() {
    const { title, author, notes, status, img_url } = this.props.bookFormData;
    return (
      <div>
        Add a Book
        <form>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            value={title}
          />

          <label htmlFor='author'>Author:</label>
          <input
            type='text'
            name='author'
            value={author}
          />
          <label htmlFor='notes'>Notes:</label>
          <input
            type='text'
            name='notes'
            value={notes}
          />
          <label htmlFor='status'>Status:</label>
          <input
            type='text'
            name='status'
            value={status}
          />
          <label htmlFor='img_url'>Cover Image:</label>
          <input
            type='text'
            name='img_url'
            value={img_url}
          />
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

export default connect (mapStateToProps)(BookForm);
