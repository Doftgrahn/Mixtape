import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import UserProfil from '../userProfile/userProfile'
import Logo from '../../assets/logo/Logo'
import Account from '../../assets/account/account'

import { toggleUserProfile } from '../../logic/sidemenu/sidemenuAction'

const Header: FC<{}> = () => {
  const IsloggedIn = useSelector((state: any) => state.auth.isAuthenticated)

  const history = useHistory()
  const dispatch = useDispatch()

  if (!IsloggedIn) return null

  return (
    <header className="header">
      <div onClick={() => history.goBack()} className="logoWrapper">
        <Logo height={50} width={80} />
        <h1>MixTape</h1>
      </div>
      <div>
        <button className="listMeny" onClick={() => dispatch(toggleUserProfile())}>
          <Account height={50} width={50} />
        </button>
      </div>
      <UserProfil />
    </header>
  )
}

export default Header
