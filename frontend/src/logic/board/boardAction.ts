import axios from 'axios'
import { SET_BOARD, IS_LOADING } from './constants'
import { PayLoad, BoardInterface } from '../types'

export const AppModel = () => (dispatch: any) => {}

export const addBoard = (userId: string) => (dispatch: any) => {
  dispatch(IsLoading(true))
  axios
    .post('/api/board/newboard', { userId })
    .then(response => {
      const { data } = response
      dispatch(setBoard(data))
    })
    .catch(error => console.log('error', error))
}

const setBoard = (board: BoardInterface) => ({
  type: SET_BOARD,
  payload: board
})

const IsLoading = (isLoading: boolean): PayLoad => {
  return {
    type: IS_LOADING,
    payload: isLoading
  }
}
