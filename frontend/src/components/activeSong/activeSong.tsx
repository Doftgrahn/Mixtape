import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Div100vh from 'react-div-100vh'

import { toggleActiveTrack } from '../../logic/sidemenu/sidemenuAction'
import { deleteListItem } from '../../logic/list/listAction'
import { showLyricModal, showSpotifyModal } from '../../logic/modal/modalAction'

import UpdateSong from './updateSong/updateSong'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import Trash from '../../assets/trash/trash'

import PlaySong from './playSong/playSong'

import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'

const ActiveSong: FC<any> = ({ currentsong, activeTrack }) => {
  const dispatch = useDispatch()
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  const { current } = currentsong

  const hide = () => dispatch(toggleActiveTrack())

  const deleteSong = (id: any) => {
    dispatch(deleteListItem(id))
    hide()
  }

  const lyricModal = () => {
    dispatch(showLyricModal())
    hide()
  }

  const spotifyModal = () => {
    dispatch(showSpotifyModal())
    hide()
  }

  useEffect(() => {
    if (!activeTrack) {
      setIsComponentVisible(true)
    }
  })

  return (
    <section
      ref={ref}
      className={`activeSong sidebar ${activeTrack && isComponentVisible && 'active'}`}>
      <Div100vh>
        <header className="sidebarHeader">
          <UpdateSong />
          <button onClick={hide}>
            <SideMenuCross height={20} width={20} />
          </button>
        </header>
        <article>
          <div className="sidebar_section">
            <button onClick={lyricModal}>{current.lyrics ? 'see lyrics..' : '+ add lyric'}</button>
          </div>
          <div className="sidebar_section">
            <PlaySong />
            <button onClick={spotifyModal}>
              {current.spotifyTrackID ? 'Change song from Spotify' : '+ add from spotify'}
            </button>
          </div>
        </article>
        <footer>
          <button className="deleteSongBtn" onClick={() => deleteSong(current._id)}>
            <span className="deleteText">Delete Song</span>
            <Trash height={20} width={20} />
          </button>
        </footer>
      </Div100vh>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  currentsong: state.activeList,
  activeTrack: state.sidemenu.activeTrack
})

export default connect(mapStateToProps)(ActiveSong)
