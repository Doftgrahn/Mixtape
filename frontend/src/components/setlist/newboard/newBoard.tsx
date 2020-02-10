import React, { FC } from 'react'

import { useDispatch } from 'react-redux'
import { showSetlistModal } from '../../../logic/modal/modalAction'

const NewBoard: FC<any> = () => {
  const dispatch = useDispatch()

  const showModal = () => dispatch(showSetlistModal())

  return (
    <li className="newSetlist">
      <button className="addSetlist" onClick={showModal}>
        <div className="text">
          <div className="plusWrapper">
            <span>+</span>
          </div>
          <h3>Add setlist</h3>
        </div>
      </button>
    </li>
  )
}

export default NewBoard
