import axios from 'axios'
import { GET_BOARDS, IS_LOADING } from './constants'
import { PayLoad, BoardInterface } from '../types'

export const AppModel = (id: string) => (dispatch: any, state: any) => {
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
  type: GET_BOARDS,
  payload: board
})

const IsLoading = (isLoading: boolean): PayLoad => ({ type: IS_LOADING, payload: isLoading })
