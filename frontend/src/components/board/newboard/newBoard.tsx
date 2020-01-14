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
    <div className="newBoard">
      <button onClick={showModal}>add Board</button>
      {ifModalVisible()}
    </div>
  )
}

export default NewBoard
