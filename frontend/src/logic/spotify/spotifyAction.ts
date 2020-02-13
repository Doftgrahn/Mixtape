import {
  GET_SPOTIFY_SEARCH,
  IS_SPOTIFY_LOADING,
  ERRORS_SPOTIFY,
  DOES_SPOTIFY_NEED_REFRESH
} from './types'
import { PayLoad } from '../types'
import Axios from 'axios'

export const getSpotifySearch = (searchString: string) => (dispatch: any, useState: any) => {
  if (searchString.length <= 1) {
    return dispatch(setSpotifySearch([]))
  }
  const spotifytoken = useState().auth.user.spotifyToken
  const url = `https://api.spotify.com/v1/search?q=${searchString}&type=track`

  const config = {
    headers: {
      Authorization: `Bearer ${spotifytoken}`
    }
  }

  dispatch(setSpotifyLoading(true))
  Axios.get(url, config)
    .then(result => {
      const { items } = result.data.tracks
      const takeOut = items.map((song: any) => {
        const artist = song.artists.map((artist: any) => artist.name)
        const spotUrl = song.external_urls.spotify
        const img = song.album.images.map((image: any) => image.url)[2]

        const newSong = {
          id: song.id,
          uri: song.uri,
          name: song.name,
          albumName: song.album.name,
          artist: artist,
          spotUrl: spotUrl,
          img: img,
          previewURL: song.preview_url
        }
        return newSong
      })

      dispatch(setSpotifySearch(takeOut))
      dispatch(setSpotifyLoading(false))
    })
    .catch(error => {
      if (error.response.status === 401) {
        // Fetch anrop här tack
        dispatch(spotifyNeedsRefresh(true))
      }
      dispatch(setSpotifyErrors(error))
    })
}

const setSpotifySearch = (list: any): PayLoad => ({
  type: GET_SPOTIFY_SEARCH,
  payload: list
})

const setSpotifyLoading = (loading: boolean): PayLoad => ({
  type: IS_SPOTIFY_LOADING,
  payload: loading
})

const setSpotifyErrors = (errors: object): PayLoad => ({
  type: ERRORS_SPOTIFY,
  payload: errors
})

const spotifyNeedsRefresh = (refresh: boolean): PayLoad => ({
  type: DOES_SPOTIFY_NEED_REFRESH,
  payload: refresh
})
