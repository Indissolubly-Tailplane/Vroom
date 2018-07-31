import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_USER = 'GET_USER'
const GET_USER_LOGIN = 'GET_USER_LOGIN'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const initialState = {
  allUsers: [],
  singleUser: {},
  loggedInUser: {},
  defaultUser: {}
}

/**
 * ACTION CREATORS
 */

const getAllUsers = allUsers => ({type: GET_ALL_USERS, allUsers})
const getUser = singleUser => ({type: GET_USER, singleUser})
const getUserLogin = loggedInUser => ({type: GET_USER_LOGIN, loggedInUser})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const fetchAllUsers = () => async dispatch => {
  try {
    const allUsers = await axios.get('/api/users')
    dispatch(getAllUsers(allUsers.data))
  } catch (err) {
    console.log(err)
  }
}
export const fetchUser = id => async dispatch => {
  try {
    const singleUser = await axios.get(`/api/users/${id}`)
    dispatch(getUser(singleUser.data))
  } catch (err) {
    console.log(err)
  }
}
export const deleteUser = userId => async dispatch => {
  try {
    await axios.delete(`api/users/${userId}`)
  } catch (err) {
    console.log(err)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUserLogin(res.data || initialState.defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  console.log("AUTH STARTED RUNNING");
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUserLogin({error: authError}))
  }

  try {
   let action = dispatch(getUserLogin(res.data))
    history.push('/home')
    return action.loggedInUser;
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
  console.log("AUTH FINISHED RUNNING")
}

export const logout = () => async dispatch => {
  window.sessionStorage.clear()
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.allUsers
      }
    case GET_USER_LOGIN:
      return action.loggedInUser
    case GET_USER:
      return {
        ...state,
        singleUser: action.singleUser
      }
    case REMOVE_USER:
      return initialState.defaultUser
    default:
      return state
  }
}
