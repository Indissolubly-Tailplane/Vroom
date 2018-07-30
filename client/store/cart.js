import history from '../history' // why this?

// create a `cart product' object
// your cart on state can look like this
/* [
  {itemId: 0, quantity: 5},
  {itemId: 2, quantity: 1},
]
*/

const UPDATE_ITEMS_IN_CART = 'UPDATE_ITEMS_IN_CART'
const store = window.sessionStorage.length
const initialState = {
  itemsInCart: store
}

export function UpdateItemsInCart() {
  const newStore = window.sessionStorage.length
  return {
    type: UPDATE_ITEMS_IN_CART,
    itemsInCart: newStore
  }
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ITEMS_IN_CART':
      return {itemsInCart: action.itemsInCart}
    default:
      return state
  }
}

export default cart
