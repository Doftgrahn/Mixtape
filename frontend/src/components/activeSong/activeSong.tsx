import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { cleanAllSideMenus } from '../../logic/sidemenu/sidemenuAction'
import { deleteListItem } from '../../logic/list/listAction'
import { toggleLyricsModal, toggleSpotifyModal } from '../../logic/modal/modalAction'
import Sidemenu from '../shared/sidemenu/sidemenu'
import UpdateSong from './updateSong/updateSong'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import Trash from '../../assets/trash/trash'
import PlaySong from './playSong/playSong'
import { TrackInterface } from '../../logic/list/constants'
import { BoardInterface } from '../../types/propTypes'

interface ActiveSongInterface {
  currentsong: TrackInterface
  sidemenu: boolean
  activeSetlist: BoardInterface
}

const ActiveSong: FC<ActiveSongInterface> = ({ currentsong, sidemenu, activeSetlist }) => {
  const dispatch = useDispatch()
  const hide = () => dispatch(cleanAllSideMenus())

  const deleteSong = (id: any) => {
    dispatch(deleteListItem(id))
    hide()
  }

  const lyricModal = () => {
    dispatch(toggleLyricsModal())
    hide()
  }

  const spotifyModal = () => {
    dispatch(toggleSpotifyModal())
    hide()
  }

  return (
    <Sidemenu sidemenu={sidemenu}>
      <header className="sidebarHeader">
        <UpdateSong />
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <div className="sidebar_section">
          <button onClick={lyricModal}>
            {currentsong.lyrics ? 'see lyrics..' : '+ add lyric'}
          </button>
        </div>
        <div className="sidebar_section">
          <PlaySong />
          <button onClick={spotifyModal}>
            {currentsong.spotifyTrackID ? 'Change song from Spotify' : '+ add from spotify'}
          </button>
        </div>
      </article>
      <footer>
        {activeSetlist.isOwner && (
          <button className="deleteSongBtn" onClick={() => deleteSong(currentsong._id)}>
            <span className="deleteText">Delete Song</span>
            <Trash height={20} width={20} />
          </button>
        )}
      </footer>
    </Sidemenu>
  )
}

const mapStateToProps = (state: any) => ({
  currentsong: state.activeList,
  sidemenu: state.sidemenu.activeTrack,
  activeSetlist: state.activeBoard
})

export default connect(mapStateToProps)(ActiveSong)
