import React, { useState, FC } from 'react'
import NewBoardModal from '../newboardmodal/newboardModal'

const NewBoard: FC<any> = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)

  const ifModalVisible = () => {
    if (isVisible) {
      return <NewBoardModal hideModal={hideModal} isVisible={isVisible} />
    }
    return null
  }

  return (
    <>
      <li className="newSetlist boardlist">
        <button className="addSetlist" onClick={showModal}>
          <div className="text">
            <div className="plusWrapper">
              <span>+</span>
            </div>
            <h3>Add setlist</h3>
          </div>
        </button>
      </li>
      {ifModalVisible()}
    </>
  )
}

export default NewBoard
