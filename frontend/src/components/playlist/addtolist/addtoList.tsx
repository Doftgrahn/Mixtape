import React, { FC, useState } from 'react'

import AddToListModal from '../addtoListModal/addToListModal'
const NewBoard: FC<any> = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)
  const ifModalVisible = () => {
    if (isVisible) {
      return <AddToListModal hideModal={hideModal} isVisible={isVisible} />
    }
    return null
  }

  return (
    <>
      <button className="addPlaylistBtn" onClick={showModal}>
        <h3>+ Add a song</h3>
      </button>
      {ifModalVisible()}
    </>
  )
}

export default NewBoard
