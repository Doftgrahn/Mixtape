import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logoutUser } from '../../logic/auth/authAction'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import ThemeSwitcher from '../shared/themeswitcher/themeswitcher'

import { toggleUserProfile } from '../../logic/sidemenu/sidemenuAction'

import {
  calculateHowManySetlists,
  calculateHowManyInvitedTo
} from '../../utils/calculatePlaylists/calculatePlaylist'

import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'

const UserProfile: FC<any> = ({ auth, sidemenu, setlists }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  const dispatch = useDispatch()
  const { user } = auth

  let url = 'https://www.mixtape.nu/api/users/logout'
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:4000/api/users/logout'
  }

  const hide = () => {
    dispatch(toggleUserProfile())
    setIsComponentVisible(true)
  }

  useEffect(() => {
    if (!sidemenu) {
      setIsComponentVisible(true)
    }
  })

  return (
    <section
      ref={ref}
      className={`userProfile sidebar ${sidemenu && isComponentVisible ? 'active' : null}`}>
      <header className="sidebarHeader">
        <h1>Profile</h1>
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
