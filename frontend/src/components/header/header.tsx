import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Logo from '../../assets/logo/Logo'
import Account from '../../assets/account/account'

import { toggleUserProfile } from '../../logic/sidemenu/sidemenuAction'

const Header: FC<{}> = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const IsloggedIn = useSelector((state: any): boolean => state.auth.isAuthenticated)

  if (!IsloggedIn) return null

  const goBack = () => {
    const atDashBoard = history.location.pathname === '/dashboard'
    if (atDashBoard) return
    history.goBack()
  }

  return (
    <header className="header">
      <div onClick={goBack} className="logoWrapper">
        <Logo height={50} width={80} />
        <h1>MixTape</h1>
      </div>
      <div className="accountLogo_container">
        <button className="listMeny" onClick={() => dispatch(toggleUserProfile())}>
          <Account height={50} width={50} />
        </button>
      </div>
    </header>
  )
}

export default Header
