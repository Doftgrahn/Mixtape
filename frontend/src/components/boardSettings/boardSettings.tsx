import React, { FC } from 'react'

import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deletion, leaveSetlist } from '../../logic/setlist/setlistAction'

import Sidemenu from '../shared/sidemenu/sidemenu'
import Description from './description/description'
import InvitedCollaborators from './invitedCollaborators/invitedCollaborators'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import SearchUsers from './searchUsers/searchUsers'
import ShowUsers from './showUsers/showUsers'
import Trash from '../../assets/trash/trash'
import CreateSpotifyPlayList from './createSpotifyPlaylist/createSpotifyPlaylist'

import { toggleEditSetlist } from '../../logic/sidemenu/sidemenuAction'
import { BoardInterface } from '../../logic/types'
import { TrackInterface } from '../../logic/list/constants'

interface BoardSettingsInterface {
  activeBoard: BoardInterface
  playlist: TrackInterface[]
  sidemenu: boolean
}

const BoardSettings: FC<BoardSettingsInterface> = ({ activeBoard, playlist, sidemenu }) => {
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
    <Sidemenu sidemenu={sidemenu}>
      <header>
        <h1>{activeBoard.title}</h1>
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <div className="sidebar_section">
          <Description />
        </div>
        <div className="sidebar_section">
          <h4>This setlist contains {playlist.length} songs</h4>
          <CreateSpotifyPlayList />
        </div>
        <div className="sidebar_section">
          {activeBoard.collaborators.length ? <h4>Collaborators</h4> : ''}
          <InvitedCollaborators />
          <SearchUsers />
          <ShowUsers />
        </div>
      </article>
      <footer>
        {activeBoard.isOwner && (
          <button className="sideMenu_delete" onClick={deleteBoard}>
            <span className="deleteText">Delete Setlist</span> <Trash height={20} width={20} />
          </button>
        )}
        {!activeBoard.isOwner && (
          <button
            className="sideMenu_delete"
            onClick={() => leaveSetListIfNotOwner(activeBoard._id)}>
            Leave Setlist
          </button>
        )}
      </footer>
    </Sidemenu>
  )
}

const mapStateToProps = (state: any) => ({
  activeBoard: state.activeBoard.activeBoard,
  sidemenu: state.sidemenu.setlist,
  playlist: state.list.list
})

export default connect(mapStateToProps)(BoardSettings)
