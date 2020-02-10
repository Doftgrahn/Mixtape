import React, { FC } from 'react'

import { connect, useDispatch } from 'react-redux'

import { clearAndHide } from '../../logic/activeList/activeListAction'
import { toggleActiveTrack } from '../../logic/sidemenu/sidemenuAction'

import { deleteListItem } from '../../logic/list/listAction'
import { showLyricModal, showSpotifyModal } from '../../logic/modal/modalAction'

import UpdateSong from './updateSong/updateSong'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import Trash from '../../assets/trash/trash'

const ActiveSong: FC<any> = ({ currentsong, activeTrack }) => {
  const dispatch = useDispatch()
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

  return (
    <article className={`activeSong sidebar ${activeTrack ? 'active' : null}`}>
      <header className="sidebarHeader">
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <UpdateSong />
        <div className="socialBtns">
          <button onClick={lyricModal}>{current.lyrics ? 'see lyrics..' : '+ add lyric'}</button>
          <button onClick={spotifyModal}>+ add from spotify</button>
        </div>
        <button className="deleteSongBtn" onClick={() => deleteSong(current._id)}>
          <Trash height={50} width={50} />
        </button>
      </article>
      <footer></footer>
    </article>
  )
}

const mapStateToProps = (state: any) => ({
  currentsong: state.activeList,
  activeTrack: state.sidemenu.activeTrack
})

export default connect(mapStateToProps)(ActiveSong)
