import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios'

const CreateSpotifyPlayList = () => {
  const user = useSelector((state: any) => state.auth.user)
  const tracks = useSelector((state: any) => state.list)
  const setlistTitle = useSelector((state: any) => state.activeBoard.activeBoard.title)

  const createPlaylist = async () => {
    const url = `https://api.spotify.com/v1/users/${user.spotifyId}/playlists`
    const config = {
      headers: {
        Authorization: `Bearer ${user.spotifyToken}`
      }
    }

    const playlist = await Axios.post(url, { name: setlistTitle }, config)
    const playlistId = playlist.data.id
    const trackURis = tracks.list.map((song: any) => song.uri)
    const trackUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
    await Axios.post(trackUrl, { uris: trackURis }, config)
  }

  return (
    <>
      <button onClick={createPlaylist}>Create Playlist</button>
    </>
  )
}

export default CreateSpotifyPlayList
