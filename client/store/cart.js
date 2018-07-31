import history from '../history' // why this?
import axios from 'axios'

const UPDATE_ITEMS_IN_CART = 'UPDATE_ITEMS_IN_CART'
const CREATED_ORDER = 'CREATED_ORDER'
const store = window.sessionStorage.length;
const initialState = {
    itemsInCart: store,
    orderId:null
}

// ACTION CREATORS

export function UpdateItemsInCart () {
    const newStore = window.sessionStorage.length;
    return {
    type: UPDATE_ITEMS_IN_CART,
    itemsInCart: newStore
  }
}
const createdOrder = order => ({type: CREATED_ORDER, order: order})

// THUNK CREATOR
export const postOrderToDb = (orderEmail,arrayOfCarIds) => async dispatch => {
    try {
        const {data} = await axios.post('/api/orders', {email: orderEmail})
        await Promise.all(arrayOfCarIds.map(carId =>  axios.post(`api/orders/update/${data.id}`,{carId:carId})))
        await Promise.all(arrayOfCarIds.map(carId => axios.put(`/api/cars/${carId}`)))
        // dispatch(updateOrderConfirmation(data))
    } catch (err) {
        console.log(err)
    }
}

const cart = (state = initialState , action) => {
    switch(action.type){
        case 'UPDATE_ITEMS_IN_CART':
        return {itemsInCart: action.itemsInCart};
        case 'CREATED_ORDER': 
        return {...state, orderId: action.order.id}
        default:
        return state
    }
}

export default cart;
