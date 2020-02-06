import {
  GET_LIST,
  ADD_LIST,
  IS_LOADING,
  DELETE_LIST_ITEM,
  MUTATE_LIST,
  SET_PLAYLIST_ERROR
} from './constants'
import axios from 'axios'
import { setCurrentSong } from '../activeList/activeListAction'
import { PayLoad } from '../types'

export const fetchSongList = () => (dispatch: any, state: any) => {
  const { _id } = state().activeBoard.activeBoard
  dispatch(isLoading(true))
  axios
    .get(`/api/playlist/getplaylist/${_id}`)
    .then(result => {
      const { data } = result
      dispatch(getList(data))
      dispatch(isLoading(false))
    })
    .catch(error => {
      dispatch(setErrors(error))
    })
}

export const addToList = (title: any) => (dispatch: any, state: any) => {
  const { activeBoard } = state().activeBoard
  const { id } = state().auth.user
  dispatch(isLoading(true))
  const add = { activeBoard, id, title }
  axios
    .post('/api/playlist/addplaylist', add)
    .then(response => {
      const { data } = response
      dispatch(addList(data))
      dispatch(isLoading(false))
    })
    .catch(error => {
      dispatch(setErrors(error))
    })
}

export const updateListTitle = (data: any) => (dispatch: any) => {
  dispatch(isLoading(true))
  const update = {
    id: data.id,
    title: data.title
  }
  dispatch(mutateList(update))
  axios
    .put('/api/playlist/mutateplaylist', update)
    .then(respose => {
      const { data } = respose
      dispatch(setCurrentSong(data))
      dispatch(isLoading(false))
    })
    .catch(error => {
      dispatch(setErrors(error))
    })
}

export const deleteListItem = (id: string) => (dispatch: any) => {
  dispatch(isLoading(true))
  dispatch(deletetion(id))

  axios
    .delete(`/api/playlist/deleteplaylist/${id}`)
    .then(response => {
      dispatch(isLoading(false))
    })
    .catch(error => {
      dispatch(setErrors(error))
    })
}

export const deletetion = (id: string): PayLoad => ({
  type: DELETE_LIST_ITEM,
  payload: id
})

export const getList = (list: any): PayLoad => ({
  type: GET_LIST,
  payload: list
})

export const mutateList = (updateString: any): PayLoad => ({
  type: MUTATE_LIST,
  payload: updateString
})

export const addList = (boardId: string): PayLoad => ({
  type: ADD_LIST,
  payload: boardId
})

export const isLoading = (isLoading: boolean): PayLoad => ({
  type: IS_LOADING,
  payload: isLoading
})

const setErrors = (errors: any): PayLoad => ({
  type: SET_PLAYLIST_ERROR,
  payload: errors
})
