import React, { FC } from 'react'

import { useDispatch } from 'react-redux'
import { toggleSetlistModal } from '../../../logic/modal/modalAction'

const NewBoard: FC<{}> = () => {
  const dispatch = useDispatch()

  const showModal = () => dispatch(toggleSetlistModal())

  return (
    <li className="newSetlist">
      <button className="addSetlist" onClick={showModal}>
        <div className="text">
          <div className="plusWrapper">
            <span>+</span>
          </div>
          <h3 className="addSetlist">Add setlist</h3>
        </div>
      </button>
    </li>
  )
}

export default NewBoard
