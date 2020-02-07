import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logoutUser } from '../../logic/auth/authAction'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import ThemeSwitcher from '../shared/themeswitcher/themeswitcher'

import { toggleUserProfile } from '../../logic/sidemenu/sidemenuAction'

import {
  calculateHowManySetlists,
  calculateHowManyInvitedTo
} from '../../utils/calculatePlaylists/calculatePlaylist'

const UserProfile: FC<any> = ({ auth, sidemenu, setlists }) => {
  const dispatch = useDispatch()
  const { user } = auth

  let url = 'https://www.mixtape.nu/api/users/logout'
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:4000/api/users/logout'
  }

  const hide = () => dispatch(toggleUserProfile())

  return (
    <section className={`userProfile sidebar ${sidemenu ? 'active' : null}`}>
      <header className="sidebarHeader">
        <h1 className="profileTitle">Profile</h1>
        <button className="hide" onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <h2 className="userName">{user.name}</h2>
      {calculateHowManySetlists(setlists)}
      {calculateHowManyInvitedTo(setlists)}
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
  auth: state.auth,
  sidemenu: state.sidemenu.userprofile,
  setlists: state.setlist
})

export default connect(mapStateToProps)(UserProfile)
