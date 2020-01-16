import axios from 'axios'
import { GET_BOARDS, IS_LOADING, DELETE_BOARD, CLEAR_SETLIST } from './constants'
import { PayLoad, BoardInterface } from '../types'

export const AppModel = () => (dispatch: any, state: any) => {
  const { id } = state().auth.user
  dispatch(IsLoading(true))
  axios
    .get(`/api/board/getboards/${id}`)
    .then(result => {
      const { data } = result

      dispatch(setBoard(data))
      dispatch(IsLoading(false))
    })
    .catch(e => console.log('Could not get ALL MUSICBOARDS', e))
}

export const addBoard = (board: any) => (dispatch: any) => {
  const data = {
    userId: board.userId,
    title: board.title
  }
  dispatch(IsLoading(true))
  axios
    .post('/api/board/newboard', data)
    .then(response => {
      const { data } = response
      dispatch(setBoard(data))
      dispatch(IsLoading(false))
    })
    .catch(error => console.log('Could not create board', error))
}

export const deletion = (id: string) => (dispatch: any) => {
  axios
    .delete(`/api/board/deleteboard/${id}`)
    .then((result: any) => {
      dispatch(deleteBoard(id))
    })
    .catch((error: any) => console.log('error', error))
}

const deleteBoard = (id: string) => ({
  type: DELETE_BOARD,
  payload: id
})

const setBoard = (board: BoardInterface) => ({
  type: GET_BOARDS,
  payload: board
})

export const clearSetlist = () => ({
  type: CLEAR_SETLIST
})

const IsLoading = (isLoading: boolean): PayLoad => ({ type: IS_LOADING, payload: isLoading })
