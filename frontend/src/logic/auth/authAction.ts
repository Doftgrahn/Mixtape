import axios from 'axios'
import setAuthToken from './utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, CLEAR_USER } from './contants'
import { Dispatch, AnyAction } from 'redux'

import { clearSetlist } from '../setlist/setlistAction'
import { cleanAllSideMenus } from '../sidemenu/sidemenuAction'
import { clearActiveSetlist } from '../activeBoard/activeBoardAction'
import { PayLoad } from '../types'

import logOutUserAuto from '../utils/autoLogOut'
import { ThunkDispatch } from 'redux-thunk'
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

export const getActiveUser = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: any) => {
  const isLoggedIn = getState().auth.isAuthenticated

  axios
    .get('/api/users/getActiveUser')
    .then(result => {
      const { data } = result
      const decoded = jwt_decode(data) as any
      if (!data && !isLoggedIn) {
        return
      }
      // Checks if user is null and if user is logged i.
      if (!data && isLoggedIn) {
        return logOutUserAuto(dispatch, logoutUser)
      }
      const user: any = {
        date: decoded.user.date,
        _id: decoded.user._id,
        id: decoded.user._id,
        name: decoded.user.name,
        googleId: decoded.user.googleId,
        spotifyId: decoded.user.spotifyId,
        avatar: decoded.user.avatar,
        spotifyToken: decoded.user.spotifyToken,
        googleToken: decoded.user.googleToken,
        email: decoded.user.email
      }
      dispatch(setCurrentUser(user))
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response
      })
    })
}

export const deleteUserPerm = () => async (dispatch: any, getState: any) => {
  const userid = getState().auth.user._id
  await axios.delete(`/api/users/deleteuser/${userid}`)

  // logOutUserAuto(dispatch, logoutUser)
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
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(clearUser())
  // dispatch(setCurrentUser(''))
  dispatch(clearActiveSetlist())
  dispatch(clearSetlist())
  dispatch(cleanAllSideMenus())
  dispatch(cleanAllSideMenus())
}
