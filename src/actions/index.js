import { BOOK_LIST_ACTIONS, SHOPPING_CART_ACTIONS } from "../consts"

const booksLoaded = newBooks => {
  return {
    type: BOOK_LIST_ACTIONS.FETCH_BOOKS_SUCCESS,
    payload: newBooks,
  }
}

const booksRequested = () => {
  return {
    type: BOOK_LIST_ACTIONS.FETCH_BOOKS_REQUEST,
  }
}

const booksError = error => {
  return {
    type: BOOK_LIST_ACTIONS.FETCH_BOOKS_FAILURE,
    payload: error,
  }
}

const bookAddedToCart = bookId => {
  return {
    type: SHOPPING_CART_ACTIONS.BOOK_ADDED_TO_CART,
    payload: bookId,
  }
}

const bookRemovedFromCart = bookId => {
  return {
    type: SHOPPING_CART_ACTIONS.BOOK_REMOVED_FROM_CART,
    payload: bookId,
  }
}

const allBookRemovedFromCart = bookId => {
  return {
    type: SHOPPING_CART_ACTIONS.ALL_BOOK_REMOVED_FROM_CART,
    payload: bookId,
  }
}

const fetchBooks = bookstoreService => () => dispatch => {
  dispatch(booksRequested())
  bookstoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)))
}

export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBookRemovedFromCart,
}
