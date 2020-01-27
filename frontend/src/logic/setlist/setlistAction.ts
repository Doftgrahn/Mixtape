import axios from 'axios'
import {
  GET_BOARDS,
  IS_LOADING,
  DELETE_BOARD,
  CLEAR_SETLIST,
  CREATE_BOARD,
  SET_SETLIST_ERRORS,
  MUTATE_SETLIST,
  INVITE_COLLABORATOR
} from './constants'
import { PayLoad, BoardInterface } from '../types'

export const AppModel = () => (dispatch: any, state: any) => {
  const { id } = state().auth.user
  dispatch(IsLoading(true))
  axios
    .get(`/api/setlist/getsetlists/${id}`)
    .then(result => {
      const { data } = result
      dispatch(setBoard(data))
      dispatch(IsLoading(false))
    })
    .catch(error => dispatch(setErrors(error)))
}

export const addBoard = (board: any) => (dispatch: any) => {
  const data = {
    userId: board.userId,
    title: board.title
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
      console.log('restult', result)
    })
    .catch(error => {
      dispatch(setErrors(error))
    })
}

export const updateSetlistTitle = (setlist: object) => (dispatch: any) => {
  console.log(setlist)
}

const deleteBoard = (id: string) => ({
  type: DELETE_BOARD,
  payload: id
})

const addSetlist = (setlist: BoardInterface) => ({
  type: CREATE_BOARD,
  payload: setlist
})

const mutateSetList = (setlist: object): PayLoad => ({
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

export const clearSetlist = () => ({
  type: CLEAR_SETLIST
})

const IsLoading = (isLoading: boolean): PayLoad => ({ type: IS_LOADING, payload: isLoading })

const setErrors = (error: any): PayLoad => ({ type: SET_SETLIST_ERRORS, payload: error })
