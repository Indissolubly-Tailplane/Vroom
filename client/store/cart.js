import history from '../history' // why this?

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
