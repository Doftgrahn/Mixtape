import React, { FC, useState } from 'react'
import LyricsList from './lyricsList'

import { useDispatch } from 'react-redux'

import { fetchgetTracks } from '../../../logic/lyrics/lyricsAction'

const Lyrics: FC<any> = () => {
  const dispatch = useDispatch()
  const [song, setSong] = useState('')

  const getAllTracks = () => {
    if (song) {
      dispatch(fetchgetTracks(song))
    }
  }

  return (
    <div>
      <h1>Find Lyrics!</h1>
      <input
        type="text"
        value={song}
        onChange={e => setSong(e.target.value)}
        placeholder="search for a song..."
      />
      <button onClick={getAllTracks}>Check for lyrics</button>
      <LyricsList />
    </div>
  )
}
export default Lyrics
