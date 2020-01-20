import { GET_LIST, ADD_LIST, IS_LOADING, DELETE_LIST_ITEM, MUTATE_LIST } from './constants'
import axios from 'axios'
import { setCurrentSong } from '../activeList/activeListAction'

export const fetchSongList = () => (dispatch: any, state: any) => {
  const { activeBoard } = state().activeBoard
  dispatch(isLoading(true))
  axios
    .get(`/api/playlist/getplaylist/${activeBoard}`)
    .then(result => {
      const { data } = result
      dispatch(getList(data))
      dispatch(isLoading(false))
    })
    .catch(error => {
      console.log('Could not get list')
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
      console.log('Could not creat list item')
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
      console.log('Could not sert', error)
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
      console.log('Error', error)
    })
}

export const deletetion = (id: string) => ({
  type: DELETE_LIST_ITEM,
  payload: id
})

export const getList = (list: any) => ({
  type: GET_LIST,
  payload: list
})

export const mutateList = (updateString: any) => ({
  type: MUTATE_LIST,
  payload: updateString
})

export const addList = (boardId: string) => ({
  type: ADD_LIST,
  payload: boardId
})

export const isLoading = (isLoading: boolean) => ({
  type: IS_LOADING,
  payload: isLoading
})
