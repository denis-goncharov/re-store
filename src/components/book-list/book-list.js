import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import BookListItem from "../book-list-item"
import { withBookstoreService } from "../hoc"
import { fetchBooks, bookAddedToCart } from "../../actions"
import { compose } from "../../utils"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"

import "./book-list.css"

const BookList = ({ books, onAddedToCart }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <BookListItem
            key={book.id}
            book={book}
            onAddedToCart={() => onAddedToCart(book.id)}
          />
        )
      })}
    </div>
  )
}

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator error={error} />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  )
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)