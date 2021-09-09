import React from "react"

import { priceCentFormat, splitPrice } from "../../utils"

import "./book-list-item.css"

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book

  const { dollars, cents } = splitPrice(price)

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover"></img>
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">
          <span className="price-sign">$</span>
          {dollars}
          <span className="cent-value">{priceCentFormat(cents)}</span>
        </div>
        <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default BookListItem
