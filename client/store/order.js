import axios from 'axios'
import history from '../history'
import {CommentActions} from 'semantic-ui-react'

const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
const GET_ORDER = 'GET_ORDER'
const GET_ORDER_BY_EMAIL = 'GET_ORDER_BY_EMAIL'

const initialState = {
  allOrders: [],
  singleOrder: {},
  orderByEmail: []
}

const getAllOrders = allOrders => ({type: GET_ALL_ORDERS, allOrders})
const getOrder = singleOrder => ({type: GET_ORDER, singleOrder})
const getOrderByEmail = orderByEmail => ({
  type: GET_ORDER_BY_EMAIL,
  orderByEmail
})

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

export const fetchOrderByEmail = () => async dispatch => {
  try {
    const orderByEmail = await axios.get(`api/orders/email`, {
      email: 'cg@email.com'
    })
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
    default:
      return state
  }
}
