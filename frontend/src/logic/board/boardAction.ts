import axios from 'axios'
import { SET_BOARD, IS_LOADING, CREATE_BOARD } from './constants'
import { PayLoad, BoardInterface } from '../types'

export const AppModel = (id: string) => (dispatch: any) => {
  axios
    .get(`/api/board/getboards/${id}`)
    .then(result => {
      dispatch(setBoard(result.data))
    })
    .catch(e => console.log('Could not get ALL MUSICBOARDS', e))
}

export const addBoard = (userId: string) => (dispatch: any) => {
  dispatch(IsLoading(true))
  axios
    .post('/api/board/newboard', { userId })
    .then(response => {
      const { data } = response
      dispatch(addOneBoard(data))
    })
    .catch(error => console.log('Could not create board', error))
}

const setBoard = (board: BoardInterface) => ({
  type: SET_BOARD,
  payload: board
})

const addOneBoard = (board: BoardInterface) => ({
  type: CREATE_BOARD,
  payload: board
})

const IsLoading = (isLoading: boolean): PayLoad => {
  return {
    type: IS_LOADING,
    payload: isLoading
  }
}
