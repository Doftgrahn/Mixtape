import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logoutUser } from '../../logic/auth/authAction'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import ThemeSwitcher from '../shared/themeswitcher/themeswitcher'

//import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'

const UserProfile: FC<any> = ({ auth, isVisible, hide }) => {
  // const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
  const dispatch = useDispatch()
  const { user } = auth

  return (
    <section className={`userProfile sidebar ${isVisible ? 'active' : null}`}>
      <header>
        <button className="hide" onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <h1 className="profileTitle">Profile</h1>
      <h2 className="userName">{user.name}</h2>
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
