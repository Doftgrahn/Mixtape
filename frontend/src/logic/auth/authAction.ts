import axios from 'axios'
import setAuthToken from './utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './contants'
import { Dispatch } from 'redux'

// Register User
export const registerUser = (userData: object, history: any) => (dispatch: Dispatch) => {
  dispatch(setUserIsLoading(true))
  axios
    .post('/api/users/register', userData)
    .then(() => {
      history.push('/mixtape')
      dispatch(setUserIsLoading(false))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Login - get user token
export const loginUser = (userData: any) => (dispatch: Dispatch) => {
  dispatch(setUserIsLoading(true))

  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      // Set token to Auth header
      setAuthToken(token)
      // Decode token to get user data
      const decoded = jwt_decode(token) as any
      // Set current user
      dispatch(setCurrentUser(decoded))
      dispatch(setUserIsLoading(false))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const recoverPassword = (email: string) => (dispatch: Dispatch) => {
  dispatch(setUserIsLoading(true))
  axios
    .post('/api/users/reset_password', email)
    .then(() => {
      dispatch(setUserIsLoading(false))
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const updatePassword = (userData: any, history: any) => (dispatch: Dispatch) => {
  dispatch(setUserIsLoading(true))
  axios
    .post(`/api/users/update_password`, userData)
    .then(() => {
      setAuthToken(userData.token)
      dispatch(setUserIsLoading(false))
      history.push('/login')
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    })
}

// Set logged in user
export const setCurrentUser = (decoded: string) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// User loading
export const setUserIsLoading = (isLoading: boolean) => {
  return {
    type: USER_LOADING,
    payload: isLoading
  }
}

// Log user out
export const logoutUser = () => (dispatch: Dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser(''))
}
