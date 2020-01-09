import axios from 'axios'
import { SET_BOARD, IS_LOADING } from './constants'
import { PayLoad, BoardInterface } from '../types'

export const AppModel = (id: string) => (dispatch: any) => {
  dispatch(IsLoading(true))
  axios
    .get(`/api/board/getboards/${id}`)
    .then(result => {
      console.log(result)

      dispatch(setBoard(result.data))
      dispatch(IsLoading(false))
    })
    .catch(e => console.log('Could not get ALL MUSICBOARDS', e))
}

export const addBoard = (userId: string) => (dispatch: any) => {
  dispatch(IsLoading(true))
  axios
    .post('/api/board/newboard', { userId })
    .then(response => {
      const { data } = response
      dispatch(setBoard(data))
      dispatch(IsLoading(false))
    })
    .catch(error => console.log('Could not create board', error))
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
