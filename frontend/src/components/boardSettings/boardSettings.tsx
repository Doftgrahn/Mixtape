import React, { FC } from 'react'

import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deletion, leaveSetlist } from '../../logic/setlist/setlistAction'

import InvitedCollaborators from './invitedCollaborators/invitedCollaborators'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import SearchUsers from './searchUsers/searchUsers'
import ShowUsers from './showUsers/showUsers'

import { toggleEditSetlist } from '../../logic/sidemenu/sidemenuAction'

const BoardSettings: FC<any> = ({ activeBoard, playlist, sidemenu }) => {
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

  return (
    <section className={`boardSettings sidebar ${!sidemenu ? 'active' : null}`}>
      <header>
        <h1>{activeBoard.title}</h1>
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
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
