const API_URL = process.env.REACT_APP_API_URL;

  // fetch('http://localhost:3001/api/books')
  //   .then(response => response.json())
  //   .then(books => this.setState({ books }))

  //Action Creators
  const setBooks = books => {
    return {
      type: 'GET_BOOKS_SUCCESS',
      books
   }
  }

    // Async Actions
    export const getBooks = () => {
      return dispatch => {
        return fetch(`${API_URL}/books`)
          .then(response => response.json())
          .then(books => dispatch(setBooks(books)))
          .catch(error => console.log(error));
      }
    }

    export const createBook = book => {
      return dispatch => {
        return fetch(`${API_URL}/books`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ book: book })
        })
          .then(response => response.json())
          .then(book => { debugger
          })
          .catch(error => console.log(error))
      }
   }
