import React, { FC, useEffect } from 'react'

import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deletion, leaveSetlist } from '../../logic/setlist/setlistAction'

import Desription from './description/description'
import InvitedCollaborators from './invitedCollaborators/invitedCollaborators'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import SearchUsers from './searchUsers/searchUsers'
import ShowUsers from './showUsers/showUsers'

import { toggleEditSetlist } from '../../logic/sidemenu/sidemenuAction'

import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'
import Description from './description/description'

const BoardSettings: FC<any> = ({ activeBoard, playlist, sidemenu }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  const history = useHistory()
  const dispatch = useDispatch()

  const hide = () => dispatch(toggleEditSetlist())

  const deleteBoard = () => {
    dispatch(deletion(activeBoard._id))
    history.goBack()
  }

  const leaveSetListIfNotOwner = (id: string) => {
    history.goBack()
    dispatch(leaveSetlist(id))
  }

  useEffect(() => {
    if (!sidemenu) {
      setIsComponentVisible(true)
    }
  })

  return (
    <section
      ref={ref}
      className={`boardSettings sidebar ${sidemenu && isComponentVisible ? 'active' : null}`}>
      <header>
        <h1>{activeBoard.title}</h1>
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <Description />
        <h3>you currently have {playlist.length} songs</h3>
        <InvitedCollaborators />
        <SearchUsers />
        <ShowUsers />
      </article>
      <footer>
        {activeBoard.isOwner ? (
          <button className="sideMenu_delete" onClick={deleteBoard}>
            delete Setlist
          </button>
        ) : null}
        {!activeBoard.isOwner ? (
          <button
            className="sideMenu_delete"
            onClick={() => leaveSetListIfNotOwner(activeBoard._id)}>
            Leave Setlist
          </button>
        ) : null}
      </footer>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  activeBoard: state.activeBoard.activeBoard,
  sidemenu: state.sidemenu.setlist,
  playlist: state.list.list
})

export default connect(mapStateToProps)(BoardSettings)
