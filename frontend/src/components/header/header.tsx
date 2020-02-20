import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo'
import Account from '../../assets/account/account'
import { toggleUserProfile } from '../../logic/sidemenu/sidemenuAction'
import { RootStateInterface } from '../../logic/types'

const Header: FC<{}> = () => {
  const dispatch = useDispatch()
  const IsloggedIn = useSelector((state: RootStateInterface): boolean => state.auth.isAuthenticated)

  if (!IsloggedIn) return null

  return (
    <header className="header">
      <Link to="/dashboard" className="logoWrapper">
        <Logo height={50} width={80} />
        <h1>MixTape</h1>
      </Link>
      <div className="accountLogo_container">
        <button
          aria-label="User Profile"
          className="listMeny-btn"
          onClick={() => dispatch(toggleUserProfile())}>
          <Account height={50} width={50} />
        </button>
      </div>
    </header>
  )
}

export default Header
