import axios from 'axios'
import {
  GET_BOARDS,
  GET_COLLABORATOR_SETLIST,
  IS_LOADING,
  DELETE_BOARD,
  CLEAR_SETLIST,
  CREATE_BOARD,
  SET_SETLIST_ERRORS,
  INVITE_COLLABORATOR,
  LEAVE_SETLIST
} from './constants'
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
      dispatch(getCollabotorsSetList(collaborators))
      dispatch(IsLoading(false))
    })
    .catch(error => dispatch(setErrors(error)))
}

export const addBoard = (board: any) => (dispatch: any, getState: any) => {
  const user = getState().auth.user.name
  const data = {
    userId: board.userId,
    title: board.title,
    user: user
  }
  dispatch(IsLoading(true))
  axios
    .post('/api/setlist/newsetlist', data)
    .then(response => {
      const { data } = response
      dispatch(addSetlist(data))
      dispatch(IsLoading(false))
    })
    .catch(error => dispatch(setErrors(error)))
}

export const deletion = (id: string) => (dispatch: any) => {
  dispatch(deleteBoard(id))
  axios
    .delete(`/api/setlist/deletesetlist/${id}`)
    .then((result: any) => {})
    .catch((error: any) => dispatch(setErrors(error)))
}

export const inviteCollaborator = (userId: string) => (dispatch: any, getState: any) => {
  const setlistId = getState().activeBoard.activeBoard
  axios
    .post('/api/setlist/addcollaborator', { userId, setlistId })
    .then(result => {
      dispatch(addCollaborator(result.data))
    })
    .catch(error => {
      dispatch(setErrors(error))
    })
}

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

export const clearSetlist = () => ({ type: CLEAR_SETLIST })

const IsLoading = (isLoading: boolean): PayLoad => ({ type: IS_LOADING, payload: isLoading })

const setErrors = (error: any): PayLoad => ({ type: SET_SETLIST_ERRORS, payload: error })
