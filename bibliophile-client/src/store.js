import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const booksReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_BOOKS_SUCCESS':
      return action.books;

    default:
      return state;
  }
}

const reducers = combineReducers({
  books: booksReducer
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
