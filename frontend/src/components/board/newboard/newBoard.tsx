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
    <main className="newBoard">
      <button className="addSetlist" onClick={showModal}>
        <div className="text">
          <span>+</span>
          <h3>Add Setlist</h3>
        </div>
      </button>
      {ifModalVisible()}
    </main>
  )
}

export default NewBoard
