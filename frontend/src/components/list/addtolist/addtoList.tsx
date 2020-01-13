import React, { FC, useState } from 'react'

import AddToListModal from '../addtoListModal/addToListModal'
const NewBoard: FC<any> = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)
  const ifModalVisible = () => {
    if (isVisible) {
      return <AddToListModal hideModal={hideModal} />
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
