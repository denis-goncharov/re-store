import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"

import { priceFormat } from "../../utils"

import "./shop-header.css"

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark" href="#">
          Black Books
        </div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart" href="#">
          <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
          {numItems} items (${priceFormat(total)})
        </div>
      </Link>
    </header>
  )
}

const mapStateToProps = ({ shoppingCart: { countTotal, orderTotal } }) => {
  return {
    numItems: countTotal,
    total: orderTotal,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader)
