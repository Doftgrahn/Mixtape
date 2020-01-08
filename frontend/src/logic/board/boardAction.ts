import { SET_BOARD, IS_LOADING } from './constants'
import { Dispatch } from 'redux'
import { PayLoad } from '../types'
import axios from 'axios'

export const AppModel = () => (dispatch: Dispatch) => {}

export const addboard = (userId: string) => (dispatch: Dispatch) => {
  dispatch(IsLoading(true))
  axios
    .post('/api/board', userId)
    .then(() => {
      dispatch(IsLoading(false))
    })
    .catch(error => {})
}

export const IsLoading = (isLoading: boolean): PayLoad => {
  return {
    type: IS_LOADING,
    payload: isLoading
  }
}
