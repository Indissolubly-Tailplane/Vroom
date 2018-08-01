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
    } catch (err) {
        console.log(err)
    }
}

export const fetchCart = (user) => async (dispatch) => {
  let {data} = await axios.get(`/api/carts/${user.id}`);
  let carsId = data.map((thisCart => thisCart.carId));

  Promise.all(carsId.map(car => axios.get(`/api/cars/${car}`))).then((carsData) => {
    let carsInCart = carsData.map((car) => car.data[0])
    carsInCart.forEach((car) => window.sessionStorage.setItem(
      `item${window.sessionStorage.length + 1}`,
      JSON.stringify(car)
    ))
    dispatch(UpdateItemsInCart());
  })
}

export const postCartToDb = (id) => async (dispatch) => {
    let carIds = Object.entries(window.sessionStorage).map((car) => {
      return JSON.parse(car[1]).id
    }
    )
    let carsWithUserId = carIds.map((car) => {
      return {
        carId: car,
        userId: id
      }
    })
    try {
      let deletedCartAction = await axios.delete(`/api/carts/${id}`);
    } catch (err) {
      console.log(err)
    }

    try {
      let {data} = await axios.post(`/api/carts/`, carsWithUserId);
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
