import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logoutUser } from '../../logic/auth/authAction'
import Close from '../../assets/cross/close'
import ThemeSwitcher from '../shared/themeswitcher/themeswitcher'

const UserProfile: FC<any> = ({ auth, isVisible, hide }) => {
  const dispatch = useDispatch()
  const { user } = auth
  return (
    <section className={`userProfile sidebar ${isVisible ? 'active' : null}`}>
      <header>
        <button className="hide" onClick={hide}>
          <Close height={20} width={20} />
        </button>
      </header>
      <h1>Profile</h1>
      <h1>{user.name}</h1>
      <ThemeSwitcher />
      <button className="logout" onClick={() => dispatch(logoutUser())}>
        Log Out
      </button>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(UserProfile)
