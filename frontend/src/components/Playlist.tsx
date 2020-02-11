import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import PlaylistTitle from './playlist/playlistTitle/playlistTitle'
import NewSong from './playlist/addtolist/addtoList'
import ActiveSong from './activeSong/activeSong'
import ShowList from './playlist/showlist/showList'
import Spinner from './shared/spinner/spinner'
import PlaylistModal from './playlistModal/playlistModal'
import LyricModal from './lyricsModal/lyrics'
import SpotifyModal from './spotifyModal/spotifyModal'
import BoardSettings from './boardSettings/boardSettings'

import { PlaylistInterface } from '../types/propTypes'

import { cleanAllSideMenus } from '../logic/sidemenu/sidemenuAction'

const Playlist: FC<PlaylistInterface> = ({ list, modal }) => {
  const { isLoading } = list
  const dispatch = useDispatch()

  const playlistModal = modal.playlistModal ? <PlaylistModal /> : null
  const lyricModal = modal.lyricModal ? <LyricModal /> : null
  const spotifyModal = modal.spotifyModal ? <SpotifyModal /> : null

  useEffect(() => {
    return () => {
      dispatch(cleanAllSideMenus())
    }
  }, [dispatch])

  return (
    <main className="list">
      <div className="list_container">
        <PlaylistTitle />
        {isLoading ? <Spinner /> : null}
        <NewSong />
        <ShowList />
      </div>
      <ActiveSong />
      <BoardSettings />
      {/*Modals */}
      {playlistModal}
      {lyricModal}
      {spotifyModal}
    </main>
  )
}

const mapStatetoProp = (state: any) => ({
  activeSetlist: state.activeBoard.activeBoard,
  list: state.list,
  modal: state.modal,
  sidemenu: state.sidemenu.setlist
})

export default connect(mapStatetoProp)(Playlist)
