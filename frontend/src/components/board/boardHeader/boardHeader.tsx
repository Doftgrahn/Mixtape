import React, { useState } from 'react'

import UserProfil from '../../userProfile/userProfile'

const BoardHeader = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showUserProfil = () => setIsVisible(true)
  const hideUserProfile = () => setIsVisible(false)

  return (
    <header>
      <h1>logo</h1>
      <button onClick={showUserProfil}>User Profile</button>
      <UserProfil isVisible={isVisible} hide={hideUserProfile} />
    </header>
  )
}

export default BoardHeader
