import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const GET_ALL_CARS = 'GET_ALL_CARS'
const GET_CAR = 'GET_CAR'
const UPDATE_TOTAL = 'UPDATE_TOTAL'

/**
 * INITIAL STATE
 */
const initialState = {
  allCars: [],
  singleCar: {},
  cartTotal: 0
}

/**
 * ACTION CREATORS
 */
const getAllCars = allCars => ({type: GET_ALL_CARS, allCars})
const getCar = singleCar => ({type: GET_CAR, singleCar})
export const updateTotal = total => ({type: UPDATE_TOTAL, total})

/**
 * THUNK CREATORS
 */
export const fetchAllCars = () => async dispatch => {
  try {
    const allCars = await axios.get('/api/cars')
    dispatch(getAllCars(allCars.data))
  } catch (err) {
    console.log(err)
  }
}

export const fetchCar = id => async dispatch => {
  try {
    const car = await axios.get(`/api/cars/${id}`)
    dispatch(getCar(car.data))
  } catch (err) {
    console.log(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CARS:
      return {
        ...state,
        allCars: action.allCars
      }
    case GET_CAR:
      return {
        ...state,
        singleCar: action.singleCar
      }
    case UPDATE_TOTAL:
      return {
      ...state,
      cartTotal: action.total
    }
    default:
      return state
  }
}
