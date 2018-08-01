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
const createdOrder = order => ({type: CREATED_ORDER, order: order})

// THUNK CREATOR
export const postOrderToDb = (orderEmail,arrayOfCarIds) => async dispatch => {
    try {
        console.log("POST ORDER TO DB START")
        const {data} = await axios.post('/api/orders', {email: orderEmail})
        await Promise.all(arrayOfCarIds.map(carId =>  axios.post(`api/orders/update/${data.id}`,{carId:carId})))
        let DONTUSE = await Promise.all(arrayOfCarIds.map(carId => axios.put(`/api/cars/${carId}`)))
        // dispatch(updateOrderConfirmation(data))
        console.log("POST ORDER TO DB END")
        return(DONTUSE)
    } catch (err) {
        console.log(err)
    }
}

export const fetchCart = (user) => async (dispatch) => {
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

export const postCartToDb = (id) => async (dispatch) => {
    console.log('POST CART TO DB STARTED');
    console.log('USER ID: ', id)
    let carIds = Object.entries(window.sessionStorage).map((car) => {
      console.log('CAR IN SESSION: ', car)
      return JSON.parse(car[1]).id
    }
    )
    console.log('CAR IDS: ', carIds)
    let carsWithUserId = carIds.map((car) => {
      return {
        carId: car,
        userId: id
      }
    })
    try {
      let deletedCartAction = await axios.delete(`/api/carts/${id}`);
      console.log('DELETED CARTS')
    } catch (err) {
      console.log('ERROR')
      console.log(err)
    }

    try {
      let {data} = await axios.post(`/api/carts/`, carsWithUserId);
      console.log('ADDED CARTS')
      window.sessionStorage.clear()
      dispatch(UpdateItemsInCart());
    } catch (err) {
      console.log(err);
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
