import axios from 'axios'
import setAuthToken from './utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, CLEAR_USER } from './contants'
import { Dispatch } from 'redux'

import { clearSetlist } from '../setlist/setlistAction'
import { cleanAllSideMenus } from '../sidemenu/sidemenuAction'
import { PayLoad } from '../types'

import logOutUserAuto from '../utils/autoLogOut'
// Register User
export const registerUser = (userData: object, history: any) => (dispatch: Dispatch) => {
  dispatch(setUserIsLoading(true))
  axios
    .post('/api/users/register', userData)
    .then(() => {
      history.push('/')
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

export const getActiveUser = () => (dispatch: any, getState: any) => {
  const isLoggedIn = getState().auth.isAuthenticated

  axios
    .get('/api/users/getActiveUser')
    .then(result => {
      const { data } = result

      if (!data && !isLoggedIn) {
        return
      }

      // Checks if user is null and if user is logged i.
      if (!data && isLoggedIn) {
        return logOutUserAuto(dispatch, logoutUser)
        // let url = 'https://www.mixtape.nu/api/users/logout'
        // if (process.env.NODE_ENV === 'development') {
        //   url = 'http://localhost:4000/api/users/logout'
        // }
        // dispatch(logoutUser())
        // return window.location.replace(url)
      }

      const user: any = {
        date: data.date,
        _id: data._id,
        id: data._id,
        name: data.name,
        googleId: data.googleId,
        spotifyId: data.spotifyId,
        avatar: data.avatar,
        spotifyToken: data.spotifyToken,
        googleToken: data.googleToken,
        email: data.email
      }

      dispatch(setCurrentUser(user))
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    })
}

// Set logged in user
export const setCurrentUser = (decoded: string): PayLoad => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// User loading
export const setUserIsLoading = (isLoading: boolean): PayLoad => {
  return {
    type: USER_LOADING,
    payload: isLoading
  }
}
export const clearUser = () => ({
  type: CLEAR_USER
})

// Log user out
export const logoutUser = () => (dispatch: Dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(clearUser())
  // dispatch(setCurrentUser(''))
  dispatch(clearSetlist())
  dispatch(cleanAllSideMenus())
}
