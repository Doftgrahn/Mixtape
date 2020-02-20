import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import SideMenuCross from '../../../assets/sidemenuCross/sideMenuCross'
import { cleanAllSideMenus } from '../../../logic/sidemenu/sidemenuAction'
import { deleteUserPerm } from '../../../logic/auth/authAction'
import { Link } from 'react-router-dom'

const Settings: FC<any> = ({ hideSettings }) => {
  const dispatch = useDispatch()
  const hide = () => {
    dispatch(cleanAllSideMenus())
  }

  const deleteMyProfile = () => {
    const confirm = window.confirm(
      'Are you really sertain you want to delete your profile, all your setlists and playlists will be deleted.'
    )
    if (confirm) {
      return dispatch(deleteUserPerm())
    }
  }

  return (
    <>
      <header className="sidebarHeader">
        <h1>Profile</h1>

        <button aria-label="Hide" className="hide" onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <div className="settingsWrapper">
        <Link to="/about">Info about the creator</Link>
        <button className="deleteProfile logout " onClick={hideSettings}>
          Go Back
        </button>
        <button onClick={deleteMyProfile} className="deleteProfile logout">
          Delete My Profile
        </button>
      </div>
    </>
  )
}

export default Settings
