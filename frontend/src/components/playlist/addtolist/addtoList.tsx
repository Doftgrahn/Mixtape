import React, { FC } from 'react'

import { useDispatch } from 'react-redux'
import { showPlaylistModal } from '../../../logic/modal/modalAction'
const NewSong: FC<any> = () => {
  const dispatch = useDispatch()

  return (
    <button className="addPlaylistBtn" onClick={() => dispatch(showPlaylistModal())}>
      <h3>+ Add a song</h3>
    </button>
  )
}

export default NewSong
