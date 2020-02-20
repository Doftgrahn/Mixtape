import { PayLoad } from '../types'
import {
  USERS_INPUT,
  GET_USERS,
  IS_USERS_LOADING,
  USERS_ERROR,
  SEARCH_USERS,
  INVITED_USERS,
  ADD_USERS_COLLABORATOR,
  DELETE_USER_COLLABORATOR
} from './typesUsers'
import Axios from 'axios'
import { Dispatch } from 'redux'
import { UserInterface } from '../auth/contants'

export const fechGetAllUsers = () => async (dispatch: Dispatch) => {
  dispatch(isUsersLoading(true))
  try {
    const { data } = await Axios.get('/api/allUsers/getAllUsers')
    dispatch(getAllUsers(data))
  } catch (error) {
    dispatch(userErrors(error))
  }
}

export const searchUsers = (text: string) => (dispatch: Dispatch, getState: any) => {
  if (!text) {
    return dispatch(setSearchResult([]))
  }
  const searchResult = getState().users.users.filter((user: any) =>
    user.name.toLowerCase().includes(text.toLowerCase())
  )
  dispatch(setSearchResult(searchResult))
}

export const getInvitedUsers = () => async (dispatch: Dispatch, getState: any) => {
  const currentSetlist = getState().activeBoard._id

  try {
    const collaborators = await Axios.get(`/api/allUsers/getInvitedUsers/${currentSetlist}`)
    const { data } = collaborators
    dispatch(invitedUsers(data))
  } catch (e) {
    console.log('GETINVITED USERS', e)
    dispatch(userErrors(e))
  }
}

export const addUserCollaborator = (collaboratorId: string) => (
  dispatch: Dispatch,
  getState: any
) => {
  const getUserBasedOnIt = getState().users.users.find((x: any) => x._id === collaboratorId)
  dispatch(addUser(getUserBasedOnIt))
}

const addUser = (user: any) => ({
  type: ADD_USERS_COLLABORATOR,
  payload: user
})

export const unInviteUserCollaborator = (id: string) => ({
  type: DELETE_USER_COLLABORATOR,
  payload: id
})

// export const deleteUser = () => async (dispatch: any) => {
//   dispatch(isUsersLoading(true))
//   const deletion = await Axios.delete('/api/allUsers/deleteUser')
// }

export const usersInput = (text: string): PayLoad => ({
  type: USERS_INPUT,
  payload: text
})

const getAllUsers = (users: UserInterface[]): PayLoad => ({
  type: GET_USERS,
  payload: users
})
const invitedUsers = (users: UserInterface[]): PayLoad => ({
  type: INVITED_USERS,
  payload: users
})

const setSearchResult = (users: UserInterface[]): PayLoad => ({
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
