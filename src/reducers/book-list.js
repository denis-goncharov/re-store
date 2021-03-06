import { BOOK_LIST_ACTIONS } from "../consts"

const updateBookList = ({ state, action }) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    }
  }

  switch (action.type) {
    case BOOK_LIST_ACTIONS.FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loading: true,
        error: null,
      }
    case BOOK_LIST_ACTIONS.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null,
      }
    case BOOK_LIST_ACTIONS.FETCH_BOOKS_FAILURE:
      return {
        books: [],
        loading: false,
        error: action.payload,
      }
    default:
      return state.bookList
  }
}

export default updateBookList
