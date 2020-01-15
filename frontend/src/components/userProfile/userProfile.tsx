import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logoutUser } from '../../logic/auth/authAction'

import ThemeSwitcher from '../shared/themeswitcher/themeswitcher'

const UserProfile: FC<any> = ({ auth, isVisible, hide }) => {
  const dispatch = useDispatch()
  const { user } = auth
  return (
    <section className={`userProfile sidebar ${isVisible ? 'active' : null}`}>
      <header>
        <button onClick={hide}>hide</button>
      </header>
      <h1>Profile</h1>
      <h1>{user.name}</h1>
      <ThemeSwitcher />
      <button onClick={() => dispatch(logoutUser())}>Log Out</button>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(UserProfile)
