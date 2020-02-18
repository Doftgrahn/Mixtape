import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios'

const CreateSpotifyPlayList = () => {
  const [hasSaved, SethasSaved] = useState(false)
  const [needToBeLoggedIn, setNeedtoBeLoggedIn] = useState(false)
  const user = useSelector((state: any) => state.auth.user)
  const tracks = useSelector((state: any) => state.list)
  const setlistTitle = useSelector((state: any) => state.activeBoard.activeBoard.title)

  const createPlaylist = async () => {
    SethasSaved(true)
    const url = `https://api.spotify.com/v1/users/${user.spotifyId}/playlists`
    const config = {
      headers: {
        Authorization: `Bearer ${user.spotifyToken}`
      }
    }

    //const playlist = await
    Axios.post(url, { name: `Mixtape - ${setlistTitle}` }, config)
      .then(async playlist => {
        const playlistId = playlist.data.id
        const uris = tracks.list.map((song: any) => song.uri)
        const trackUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
        await Axios.post(trackUrl, { uris: uris }, config)
      })
      .catch(e => {
        if (e.response.status === 401) {
          setNeedtoBeLoggedIn(true)
        }
      })
  }

  const button = <button onClick={createPlaylist}>Save as playlist on Spotify</button>
  const hasCreated = <p>Nice, you just created a playlist on Spotify</p>
  const showLink = 'Link comes here'

  return (
    <>
      {!hasSaved && !needToBeLoggedIn ? button : hasCreated}
      {needToBeLoggedIn ? showLink : ''}
    </>
  )
}

export default CreateSpotifyPlayList
