import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      notes: '',
      status: '',
      img_url: ''
    }
  }

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
    return (
      <div>
        <h1>Display single book</h1>
      </div>
    )
  }
}

 export default connect (BookEdit);
