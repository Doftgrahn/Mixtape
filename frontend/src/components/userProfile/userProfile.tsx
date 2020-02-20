import React, { FC, useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logoutUser } from '../../logic/auth/authAction'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import ThemeSwitcher from '../shared/themeswitcher/themeswitcher'
import { cleanAllSideMenus } from '../../logic/sidemenu/sidemenuAction'
import {
  calculateHowManySetlists,
  calculateHowManyInvitedTo
} from '../../utils/calculatePlaylists/calculatePlaylist'
import Sidemenu from '../shared/sidemenu/sidemenu'
import { UserInterface } from '../../logic/auth/contants'
import { SetlistStateInterface } from '../../logic/setlist/constants'
import Settings from './settings/settings'

interface UserProfileInterface {
  user: UserInterface
  sidemenu: boolean
  setlists: SetlistStateInterface
}

const UserProfile: FC<UserProfileInterface> = ({ user, sidemenu, setlists }) => {
  const [isSettings, setIsSettings] = useState(false)
  const dispatch = useDispatch()

  let url = 'https://www.mixtape.nu/api/users/logout'
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:4000/api/users/logout'
  }

  const hide = () => dispatch(cleanAllSideMenus())
  const hideSettings = () => setIsSettings(false)

  useEffect(() => {
    if (!sidemenu) {
      setIsSettings(false)
    }
  }, [sidemenu])

  return (
    <Sidemenu sidemenu={sidemenu}>
      {isSettings ? (
        <Settings isSettings={isSettings} hideSettings={hideSettings} />
      ) : (
        <>
          <header className="sidebarHeader">
            <h1>Profile</h1>
            <button aria-label="Hide" className="hide" onClick={hide}>
              <SideMenuCross height={20} width={20} />
            </button>
          </header>
          <h2 className="userName">{user.name}</h2>
          {calculateHowManySetlists(setlists)}
          {calculateHowManyInvitedTo(setlists)}
          <ThemeSwitcher />
          <div className="settings">
            <button onClick={() => setIsSettings(true)} className="settings_btn">
              Settings
            </button>
          </div>
          <button className="logout">
            <a href={url} onClick={() => dispatch(logoutUser())} className="link">
              Log out
            </a>
          </button>
        </>
      )}
    </Sidemenu>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
  sidemenu: state.sidemenu.userprofile,
  setlists: state.setlist
})

export default connect(mapStateToProps)(UserProfile)
