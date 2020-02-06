import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logoutUser } from '../../logic/auth/authAction'
//import { deleteUser } from '../../logic/users/usersAction'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import ThemeSwitcher from '../shared/themeswitcher/themeswitcher'

const UserProfile: FC<any> = ({ auth, isVisible, hide }) => {
  const dispatch = useDispatch()
  const { user } = auth

  let url = 'https://www.mixtape.nu/api/users/logout'
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:4000/api/users/logout'
  }

  //const deleteProfile = () => dispatch(deleteUser())

  return (
    <section className={`userProfile sidebar ${isVisible ? 'active' : null}`}>
      <header className="sidebarHeader">
        <h1 className="profileTitle">Profile</h1>
        <button className="hide" onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <h2 className="userName">{user.name}</h2>
      <ThemeSwitcher />

      <button className="logout">
        <a href={url} onClick={() => dispatch(logoutUser())} className="link">
          Log out
        </a>
      </button>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(UserProfile)
