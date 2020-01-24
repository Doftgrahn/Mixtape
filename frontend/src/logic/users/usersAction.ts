import { PayLoad } from '../types'
import { USERS_INPUT, GET_USERS, IS_USERS_LOADING, USERS_ERROR, SEARCH_USERS } from './typesUsers'
import Axios from 'axios'

export const fechGetAllUsers = () => async (dispatch: any) => {
  dispatch(isUsersLoading(true))
  try {
    const users = await Axios.get('/api/allUsers/getAllUsers')
    dispatch(getAllUsers(users.data))
  } catch (error) {
    dispatch(userErrors(error))
  }
}

export const searchUsers = (text: string) => (dispatch: any, getState: any) => {
  if (!text) {
    return dispatch(setSearchResult([]))
  }
  const searchResult = getState().users.users.filter((user: any) =>
    user.name.toLowerCase().includes(text.toLowerCase())
  )
  dispatch(setSearchResult(searchResult))
}

export const usersInput = (text: string): PayLoad => ({
  type: USERS_INPUT,
  payload: text
})

const getAllUsers = (users: any): PayLoad => ({
  type: GET_USERS,
  payload: users
})

const setSearchResult = (users: any): PayLoad => ({
  type: SEARCH_USERS,
  payload: users
})

const isUsersLoading = (loading: boolean): PayLoad => ({
  type: IS_USERS_LOADING,
  payload: loading
})

const userErrors = (error: object): PayLoad => ({
  type: USERS_ERROR,
  payload: error
})
