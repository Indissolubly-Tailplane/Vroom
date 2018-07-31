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
    console.log("UPDATE ITEMS IN CART RAN")
    const newStore = window.sessionStorage.length;
    return {
    type: UPDATE_ITEMS_IN_CART,
    itemsInCart: newStore
  }
}

const createdOrder = order => ({type: CREATED_ORDER, order})

// THUNK CREATOR
export const postOrderToDb = (orderEmail,arrayOfCarIds) => async dispatch => {
    try {
        const {data} = await axios.post('/api/orders', {email: orderEmail})
        await Promise.all(arrayOfCarIds.map(carId =>  axios.post(`api/orders/update/${data.id}`,{carId:carId})))
        dispatch(createdOrder(data))
    } catch (err) {
        console.log(err)
    }
}

export const fetchCart = (user) => async (dispatch, getState) => {
  console.log("FETCH CART STARTED RUNNING")
  console.log("USER IN FETCHCART: ", user);
  let {data} = await axios.get(`/api/carts/${user.id}`);
  let carsId = data.map((thisCart => thisCart.carId));

  Promise.all(carsId.map(car => axios.get(`/api/cars/${car}`))).then((carsData) => {
    let carsInCart = carsData.map((car) => car.data[0])
    carsInCart.forEach((car) => window.sessionStorage.setItem(
      `item${window.sessionStorage.length + 1}`,
      JSON.stringify(car)
    ))
    console.log('CARS IN CART: ', window.sessionStorage);
    dispatch(UpdateItemsInCart());
  })
  console.log("FETCH CART FINISHED RUNNING")
}

const cart = (state = initialState , action) => {
    switch(action.type){
        case 'UPDATE_ITEMS_IN_CART':
        return {itemsInCart: action.itemsInCart};
        case 'CREATED_ORDER':
        return {orderId: action.order.id}
        default:
        return state
    }
}

export default cart;
