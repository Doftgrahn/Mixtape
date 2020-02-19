import {
  GET_LIST,
  ADD_LIST,
  IS_LOADING,
  DELETE_LIST_ITEM,
  MUTATE_LIST,
  SET_PLAYLIST_ERROR,
  CLEAR_TRACKS,
  SET_SPOTIFY_TRACK
} from './constants'
import axios from 'axios'
import { setCurrentSong } from '../activeList/activeListAction'
import { PayLoad } from '../types'

import generateObjectId from '../utils/createObjectId'

export const fetchSongList = () => async (dispatch: any, state: any) => {
  const { _id } = state().activeBoard.activeBoard
  console.log(_id)
  dispatch(isLoading(true))
  const result = await axios.get(`/api/playlist/getplaylist/${_id}`)

  dispatch(isLoading(false))

  dispatch(getList(result.data))
  dispatch(isLoading(false))
  if (!result) {
    dispatch(setErrors(result))
  }
}

export const addToList = (title: any) => async (dispatch: any, state: any) => {
  const activeBoardId = state().activeBoard.activeBoard._id
  const userId = state().auth.user.id

  const data: any = {
    _id: generateObjectId(),
    activeBoardId: activeBoardId,
    userId: userId,
    title: title,
    lyrics: '',
    spotifyTrackID: '',
    uri: '',
    date: Date.now()
  }

  dispatch(addList(data))
  const response = await axios.post('/api/playlist/addplaylist', data)
  if (!response) {
    return dispatch(setErrors(response))
  }
}

export const updateListTitle = (data: any) => async (dispatch: any) => {
  const update = {
    id: data.id,
    title: data.title
  }
  dispatch(mutateList(update))
  dispatch(isLoading(true))
  const response = await axios.put('/api/playlist/mutateplaylist', update)
  dispatch(setCurrentSong(response.data))
  dispatch(isLoading(false))

  if (!response) {
    dispatch(setErrors(response))
  }
}

export const deleteListItem = (id: string) => async (dispatch: any) => {
  dispatch(isLoading(true))
  dispatch(deletetion(id))
  await axios.delete(`/api/playlist/deleteplaylist/${id}`)
  dispatch(isLoading(false))
}

export const addSpotifyTrack = (song: any) => async (dispatch: any, getState: any) => {
  const currentTrack = getState().activeList._id
  const data = {
    spotifyTrackID: song.id,
    uri: song.uri,
    id: currentTrack
  }
  dispatch(spotifyTrack(data))
  await axios.post('/api/playlist/addSpotifyTrack', data)
}

const spotifyTrack = (data: object): PayLoad => ({
  type: SET_SPOTIFY_TRACK,
  payload: data
})

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

export const clearAllTracks = () => ({ type: CLEAR_TRACKS })
