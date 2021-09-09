import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTrash,
  faPlus,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBookRemovedFromCart,
} from "../../actions"
import { priceFormat } from "../../utils"

import "./shopping-cart-table.css"

const ShoppingCartTable = ({
  items = [],
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${priceFormat(total)}</td>
        <td className="right">
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outliner-success btn-success"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outliner-warning btn-warning"
          >
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outliner-danger btn-danger"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th className="title">Item</th>
            <th>Count</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${priceFormat(total)}</div>
    </div>
  )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  }
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBookRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
