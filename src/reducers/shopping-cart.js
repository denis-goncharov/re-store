import { SHOPPING_CART_ACTIONS } from "../consts"
import { roundNum } from "../utils"

const updateShoppingCart = ({ state, action }) => {
  if (state === undefined) {
    const savedCart = localStorage.getItem("cart")
    if (savedCart != null) {
      return JSON.parse(savedCart)
    } else {
      return {
        cartItems: [],
        orderTotal: 0,
        countTotal: 0,
      }
    }
  }

  switch (action.type) {
    case SHOPPING_CART_ACTIONS.BOOK_ADDED_TO_CART:
      return updateOrder({ state, bookId: action.payload, quantity: 1 })
    case SHOPPING_CART_ACTIONS.BOOK_REMOVED_FROM_CART:
      return updateOrder({ state, bookId: action.payload, quantity: -1 })
    case SHOPPING_CART_ACTIONS.ALL_BOOK_REMOVED_FROM_CART:
      const {
        shoppingCart: { cartItems },
      } = state
      const item = cartItems.find(({ id }) => id === action.payload)
      return updateOrder({
        state,
        bookId: action.payload,
        quantity: -item.count,
      })
    default:
      return state.shoppingCart
  }
}

const updateCartItems = ({ cartItems, item, idx }) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)]
  }

  if (idx === -1) {
    return [...cartItems, item]
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)]
}

const updateCartItem = ({ book, item = {}, quantity }) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item
  return {
    id,
    title,
    count: count + quantity,
    total: roundNum(total + book.price * quantity),
  }
}

const updateOrder = ({ state, bookId, quantity }) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state
  const book = books.find(book => book.id === bookId)
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId)
  const item = cartItems[itemIndex]
  const newCartItems = updateCartItems({
    cartItems,
    item: updateCartItem({ book, item, quantity }),
    idx: itemIndex,
  })
  const totalSum = newCartItems.reduce((total, arg) => total + arg.total, 0)
  const totalCount = newCartItems.reduce((count, arg) => count + arg.count, 0)

  const newCart = {
    cartItems: newCartItems,
    orderTotal: roundNum(totalSum),
    countTotal: totalCount,
  }

  localStorage.setItem("cart", JSON.stringify(newCart))

  return newCart
}

export default updateShoppingCart
