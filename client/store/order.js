import axios from 'axios'

const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
const GET_ORDER = 'GET_ORDER'
const GET_ORDER_BY_EMAIL = 'GET_ORDER_BY_EMAIL'
const UPDATE_ORDER = 'UPDATE_ORDER'

const initialState = {
  allOrders: [],
  singleOrder: {},
  orderByEmail: [],
  updatedOrder: {}
}

const getAllOrders = allOrders => ({type: GET_ALL_ORDERS, allOrders})
const getOrder = singleOrder => ({type: GET_ORDER, singleOrder})
const getOrderByEmail = orderByEmail => ({
  type: GET_ORDER_BY_EMAIL,
  orderByEmail
})
const updateOrder = updatedOrder => ({
  type: UPDATE_ORDER,
  updatedOrder
})

export const updateUserOrder = (id, data) => async dispatch => {
  try {
    const orderToUpdate = await axios.put(`/api/orders/${id}`, data)
    const order = orderToUpdate.data
    dispatch(updateOrder(order))
  } catch (err) {
    console.log(err)
  }
}


export const fetchAllOrders = () => async dispatch => {
  try {
    const allOrders = await axios.get('/api/orders')
    dispatch(getAllOrders(allOrders.data))
  } catch (err) {
    console.log(err)
  }
}

export const fetchOrder = id => async dispatch => {
  try {
    const order = await axios.get(`/api/orders/${id}`)
    dispatch(getOrder(order.data))
  } catch (err) {
    console.log(err)
  }
}

export const fetchOrderByEmail = email => async dispatch => {
  try {
    const orderByEmail = await axios.get(`api/orders/email/${email}`)
    dispatch(getOrderByEmail(orderByEmail.data))
  } catch (err) {
    console.log(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.allOrders
      }
    case GET_ORDER:
      return {
        ...state,
        singleOrder: action.singleOrder
      }
    case GET_ORDER_BY_EMAIL:
      return {
        ...state,
        orderByEmail: action.orderByEmail
      }
    case UPDATE_ORDER:
      return {
        ...state,
        updatedOrder: action.updatedOrder
      }
    default:
      return state
  }
}
