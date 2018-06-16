import React from 'react';
import { connect } from 'react-redux';


class Book extends React.Component {
  render() {
    return (
      <div>
        <h1>Display single book</h1>
      </div>
    )
  }
}

 export default connect (Book);
