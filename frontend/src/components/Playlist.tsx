import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import PlaylistTitle from './playlist/playlistTitle/playlistTitle'
import NewSong from './playlist/addtolist/addtoList'
import ShowList from './playlist/showlist/showList'
import PlaylistModal from './playlistModal/playlistModal'
import LyricModal from './lyricsModal/lyrics'
import SpotifyModal from './spotifyModal/spotifyModal'
import ActiveSong from './activeSong/activeSong'
import BoardSettings from './boardSettings/boardSettings'

import { fetchSongList, clearAllTracks } from '../logic/list/listAction'
import { getInvitedUsers } from '../logic/users/usersAction'
import { cleanAllSideMenus } from '../logic/sidemenu/sidemenuAction'
import { closeModals } from '../logic/modal/modalAction'

import { PlaylistInterface } from '../types/propTypes'

const Playlist: FC<PlaylistInterface> = ({ modal }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongList())
    dispatch(getInvitedUsers())

    return () => {
      dispatch(clearAllTracks())
      dispatch(cleanAllSideMenus())
      dispatch(closeModals())
    }
  }, [dispatch])

  const playlistModal = modal.playlistModal && <PlaylistModal />
  const lyricModal = modal.lyricModal && <LyricModal />
  const spotifyModal = modal.spotifyModal && <SpotifyModal />

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
