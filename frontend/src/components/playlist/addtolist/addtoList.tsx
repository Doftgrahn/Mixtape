import React, { FC } from 'react'

import { useDispatch } from 'react-redux'
import { togglePlaylistModal } from '../../../logic/modal/modalAction'
const NewSong: FC<{}> = () => {
  const dispatch = useDispatch()

  return (
    <button className="addPlaylistBtn" onClick={() => dispatch(togglePlaylistModal())}>
      <h3>+ Add a song</h3>
    </button>
  )
}

export default NewSong
