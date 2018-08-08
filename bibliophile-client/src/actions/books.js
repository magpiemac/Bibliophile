import { resetBookForm } from './bookForm';
import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

  //Action Creators
  const setBooks = books => {
    return {
      type: 'GET_BOOKS_SUCCESS',
      books
   }
  }

  const addBook = book => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
   }
 }

 const editBookId = book => {
   return {
     type: 'EDIT_BOOK_SUCCESS',
   book
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
          .then(book => {
            dispatch(addBook(book))
            dispatch(resetBookForm())
          })
          .catch(error => console.log(error))
      }
   }


   export const editBook = book => {
     return dispatch => {
       return fetch(`${API_URL}/books/{book.id}`, {
         method: "PATCH",
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({ book: book })
       })
         .then(response => response.json())
         .then(book => {
           dispatch(editBookId(book))
           dispatch(resetBookForm())
         })
         .catch(error => console.log(error))
     }
  }

  export const removeBook = book => {
    return dispatch => {
      return fetch(`${API_URL}/books/{book.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ book: book })
      })
        .then(response => response.json())
        .then(book => {
          dispatch(addBook(book))
          dispatch(resetBookForm())
        })
        .catch(error => console.log(error))
    }
 }
