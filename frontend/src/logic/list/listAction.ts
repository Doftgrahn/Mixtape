import { GET_LIST, ADD_LIST, IS_LOADING } from './constants'
import axios from 'axios'

export const fetchSongList = () => (dispatch: any, state: any) => {
  const { activeBoard } = state().activeBoard
  dispatch(isLoading(true))
  axios
    .get(`/api/list/getlist/${activeBoard}`)
    .then(result => {
      const { data } = result
      dispatch(getList(data))
      dispatch(isLoading(false))
    })
    .catch(error => {
      console.log('Could not get list')
    })
}

export const addToList = () => (dispatch: any, state: any) => {
  const { activeBoard } = state().activeBoard
  const { id } = state().auth.user
  dispatch(isLoading(true))
  const add = { activeBoard, id }
  axios
    .post('/api/list/addlist', add)
    .then(response => {
      const { data } = response
      dispatch(getList(data))
      dispatch(isLoading(false))
    })
    .catch(error => {
      console.log('Could not creat list item')
    })
}

export const getList = (list: any) => ({
  type: GET_LIST,
  payload: list
})

export const addList = (boardId: string) => ({
  type: ADD_LIST,
  payload: boardId
})

export const isLoading = (isLoading: boolean) => ({
  type: IS_LOADING,
  payload: isLoading
})
