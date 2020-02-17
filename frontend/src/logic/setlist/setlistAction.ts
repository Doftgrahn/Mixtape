import axios from 'axios'
import {
  GET_BOARDS,
  GET_COLLABORATOR_SETLIST,
  IS_LOADING,
  DELETE_BOARD,
  CLEAR_SETLIST,
  CREATE_BOARD,
  MUTATE_SETLIST,
  SET_SETLIST_ERRORS,
  INVITE_COLLABORATOR,
  UNINVITE_COLLABORSTOR,
  ADD_DESCRIPTION,
  LEAVE_SETLIST
} from './constants'

import {
  mutateActiveSetlistTitle,
  uninviteFromActiveSetlist
} from '../activeBoard/activeBoardAction'

import { addUserCollaborator, unInviteUserCollaborator } from '../users/usersAction'
import makeAnIdForMe from '../utils/createObjectId'

import { PayLoad, BoardInterface } from '../types'

export const AppModel = () => (dispatch: any, state: any) => {
  const { id } = state().auth.user
  dispatch(IsLoading(true))
  axios
    .get(`/api/setlist/getsetlists/${id}`)
    .then(result => {
      const { mySetlist, collaborators } = result.data
      const mutateIfOwner = mySetlist.map((list: any) => ({ ...list, isOwner: true }))
      dispatch(setBoard(mutateIfOwner))
      const notOwner = collaborators.map((list: any) => ({ ...list, isOwner: false }))
      dispatch(getCollabotorsSetList(notOwner))
      dispatch(IsLoading(false))
    })
    .catch(error => dispatch(setErrors(error)))
}

export const addBoard = (board: any) => (dispatch: any, getState: any) => {
  const user = getState().auth.user.name
  const data: any = {
    _id: makeAnIdForMe(),
    userId: board.userId,
    title: board.title,
    user: user,
    description: '',
    collaborators: []
  }
  const ifOwner = { ...data, isOwner: true }
  dispatch(addSetlist(ifOwner))
  dispatch(IsLoading(true))
  axios
    .post('/api/setlist/newsetlist', data)
    .then(response => {
      //const { data } = response
      dispatch(IsLoading(false))
    })
    .catch(error => dispatch(setErrors(error)))
}

export const mutateSetlist = (title: string) => async (dispatch: any, getState: any) => {
  const id = getState().activeBoard.activeBoard._id
  const data = {
    title: title,
    id: id
  }
  await axios.put('/api/setlist/mutatesetlist', data)

  dispatch(mutateActiveSetlistTitle(title))
  dispatch(mutateSetlistTitle(data))
}

export const deletion = (id: string) => async (dispatch: any) => {
  dispatch(deleteBoard(id))
  await axios.delete(`/api/setlist/deletesetlist/${id}`)
}

export const addDescription = (description: string) => async (dispatch: any, getState: any) => {
  const setlistId = getState().activeBoard.activeBoard._id
  const data = {
    id: setlistId,
    description: description
  }
  dispatch(dispatchAddDescription(data))
  await axios.post('/api/setlist/adddescription', data)
}

const dispatchAddDescription = (setlist: object) => ({
  type: ADD_DESCRIPTION,
  payload: setlist
})

export const inviteCollaborator = (userId: string) => async (dispatch: any, getState: any) => {
  const setlistId = getState().activeBoard.activeBoard
  const result = await axios.post('/api/setlist/addcollaborator', { userId, setlistId })
  dispatch(addCollaborator(result.data))
  dispatch(addUserCollaborator(userId))

  if (!result) {
    dispatch(setErrors(result))
  }
}

export const unInviteCollaborator = (colabId: string) => async (dispatch: any, getState: any) => {
  const currentSetlist = getState().activeBoard.activeBoard._id
  await axios.delete(`/api/allUsers/unInviteUser/${colabId}`)
  const mapColab = getState().setlist.boards.find((x: any) => x._id === currentSetlist)
  const filterSetlist = mapColab.collaborators.filter((x: any) => x !== colabId)
  const data = {
    collaborators: filterSetlist,
    currentSetlist: currentSetlist
  }
  dispatch(unInviteUserCollaborator(colabId))
  dispatch(unInvite(data))
  dispatch(uninviteFromActiveSetlist(filterSetlist))
}

const unInvite = (data: any): PayLoad => ({
  type: UNINVITE_COLLABORSTOR,
  payload: data
})

export const leaveSetlist = (id: string) => async (dispatch: any, getState: any) => {
  const { setlist, auth } = getState()
  const currentSetlist = setlist.collaborators.find((x: any) => x._id === id)
  const userId = auth.user._id
  dispatch(leaveIfnotOwner(currentSetlist))
  await axios.delete(`/api/setlist/leaveSetlist/${userId}`)
}

const leaveIfnotOwner = (setlist: any): PayLoad => ({
  type: LEAVE_SETLIST,
  payload: setlist
})

const deleteBoard = (id: string) => ({
  type: DELETE_BOARD,
  payload: id
})

const addSetlist = (setlist: BoardInterface) => ({
  type: CREATE_BOARD,
  payload: setlist
})

const mutateSetlistTitle = (setlist: object): PayLoad => ({
  type: MUTATE_SETLIST,
  payload: setlist
})

const addCollaborator = (setlist: string): PayLoad => ({
  type: INVITE_COLLABORATOR,
  payload: setlist
})

const setBoard = (board: BoardInterface) => ({
  type: GET_BOARDS,
  payload: board
})

const getCollabotorsSetList = (setlists: any): PayLoad => ({
  type: GET_COLLABORATOR_SETLIST,
  payload: setlists
})

export const clearSetlist = (): any => ({ type: CLEAR_SETLIST })

const IsLoading = (isLoading: boolean): PayLoad => ({ type: IS_LOADING, payload: isLoading })

const setErrors = (error: any): PayLoad => ({ type: SET_SETLIST_ERRORS, payload: error })
