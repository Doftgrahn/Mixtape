import React, { useState } from 'react'

import UserProfil from '../../userProfile/userProfile'
import Logo from '../../../assets/logo/Logo'

import Account from '../../../assets/account/account'

const BoardHeader = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showUserProfil = () => setIsVisible(true)
  const hideUserProfile = () => setIsVisible(false)

  return (
    <header className="header">
      <div className="logoWrapper">
        <Logo height={50} width={80} />
        <h1>MixTape</h1>
      </div>

      <button className="profile_button" onClick={showUserProfil}>
        <Account height={50} width={50} />
      </button>
      <UserProfil isVisible={isVisible} hide={hideUserProfile} />
    </header>
  )
}

export default BoardHeader
