import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { toggleActiveTrack } from '../../logic/sidemenu/sidemenuAction'
import { deleteListItem } from '../../logic/list/listAction'
import { showLyricModal, showSpotifyModal } from '../../logic/modal/modalAction'

import UpdateSong from './updateSong/updateSong'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import Trash from '../../assets/trash/trash'

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
      className={`activeSong sidebar ${activeTrack && isComponentVisible ? 'active' : null}`}>
      <header className="sidebarHeader">
        <UpdateSong />
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <div className="socialBtns">
          <button onClick={lyricModal}>{current.lyrics ? 'see lyrics..' : '+ add lyric'}</button>
          <button onClick={spotifyModal}>+ add from spotify</button>
        </div>
        <button className="deleteSongBtn" onClick={() => deleteSong(current._id)}>
          <Trash height={50} width={50} />
        </button>
      </article>
      <footer></footer>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  currentsong: state.activeList,
  activeTrack: state.sidemenu.activeTrack
})

export default connect(mapStateToProps)(ActiveSong)
