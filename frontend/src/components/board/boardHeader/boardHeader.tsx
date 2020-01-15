import React, { useState } from 'react'

import UserProfil from '../../userProfile/userProfile'
import Logo from '../../../assets/logo/Logo'

const BoardHeader = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showUserProfil = () => setIsVisible(true)
  const hideUserProfile = () => setIsVisible(false)

  return (
    <header>
      <div className="logoWrapper">
        <Logo height={50} width={80} />
        <h1>MixTape</h1>
      </div>

      <button onClick={showUserProfil}>User Profile</button>
      <UserProfil isVisible={isVisible} hide={hideUserProfile} />
    </header>
  )
}

export default BoardHeader
