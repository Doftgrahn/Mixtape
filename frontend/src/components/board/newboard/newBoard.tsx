import React, { useState, FC } from 'react'
import NewBoardModal from '../newboardmodal/newboardModal'

const NewBoard: FC<any> = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)
  const ifModalVisible = () => {
    if (isVisible) {
      return <NewBoardModal hideModal={hideModal} />
    }
    return null
  }

  return (
    <main>
      <button onClick={showModal}>add Board</button>
      {ifModalVisible()}
    </main>
  )
}

export default NewBoard
