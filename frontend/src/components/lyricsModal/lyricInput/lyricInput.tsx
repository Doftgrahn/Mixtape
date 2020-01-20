import React, { FC, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeLyricModal } from '../../../logic/modal/modalAction'

import { fetchgetTracks } from '../../../logic/lyrics/lyricsAction'

const LyricInput: FC = () => {
  const dispatch = useDispatch()
  const [song, setSong] = useState('')

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        dispatch(closeLyricModal())
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [dispatch])

  const getAllTracks = () => (song ? dispatch(fetchgetTracks(song)) : null)
  const pressEnter = (e: any) => (e.key === 'Enter' ? getAllTracks() : null)

  return (
    <div className="input_wrapper">
      <input
        type="text"
        value={song}
        onChange={e => setSong(e.target.value)}
        onKeyPress={e => pressEnter(e)}
        placeholder="search for a song..."
        autoFocus
      />
      <button onClick={getAllTracks}>Check for lyrics</button>
    </div>
  )
}

export default LyricInput
