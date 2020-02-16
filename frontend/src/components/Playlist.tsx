import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import PlaylistTitle from './playlist/playlistTitle/playlistTitle'
import NewSong from './playlist/addtolist/addtoList'
import ShowList from './playlist/showlist/showList'
import Spinner from './shared/spinner/spinner'
import PlaylistModal from './playlistModal/playlistModal'
import LyricModal from './lyricsModal/lyrics'
import SpotifyModal from './spotifyModal/spotifyModal'

import ActiveSong from './activeSong/activeSong'
import BoardSettings from './boardSettings/boardSettings'

import { PlaylistInterface } from '../types/propTypes'

import { fetchSongList, clearAllTracks } from '../logic/list/listAction'

import { cleanAllSideMenus } from '../logic/sidemenu/sidemenuAction'

const Playlist: FC<PlaylistInterface> = ({ isLoading, modal }) => {
  const dispatch = useDispatch()

  const playlistModal = modal.playlistModal ? <PlaylistModal /> : null
  const lyricModal = modal.lyricModal ? <LyricModal /> : null
  const spotifyModal = modal.spotifyModal ? <SpotifyModal /> : null

  useEffect(() => {
    dispatch(fetchSongList())
    return () => {
      dispatch(clearAllTracks())
    }
  }, [dispatch])

  useEffect(() => {
    return () => {
      dispatch(cleanAllSideMenus())
    }
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <main className="list">
      {
        <div className="list_container">
          <PlaylistTitle />
          <NewSong />
          <ShowList />
        </div>
      }
      <BoardSettings />
      <ActiveSong />
      {/*Modals */}
      {playlistModal}
      {lyricModal}
      {spotifyModal}
    </main>
  )
}

const mapStatetoProp = (state: any) => ({
  activeSetlist: state.activeBoard.activeBoard,
  isLoading: state.list.isLoading,
  modal: state.modal,
  sidemenu: state.sidemenu.setlist
})

export default connect(mapStatetoProp)(Playlist)
