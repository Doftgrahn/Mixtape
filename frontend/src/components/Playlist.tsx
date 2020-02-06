import React, { FC } from 'react'
import { connect } from 'react-redux'

import NewSong from './playlist/addtolist/addtoList'
import ActiveSong from './activeSong/activeSong'
import ShowList from './playlist/showlist/showList'
import ListHeader from './playlist/listHeader/listHeader'
import Spinner from './shared/spinner/spinner'
import PlaylistModal from './playlistModal/playlistModal'
import LyricModal from './lyricsModal/lyrics'
import SpotifyModal from './spotifyModal/spotifyModal'

import { PlaylistInterface } from '../types/propTypes'

const Playlist: FC<PlaylistInterface> = ({ list, modal, activeSetlist }) => {
  const { isLoading } = list
  const { title, user } = activeSetlist

  const playlistModal = modal.playlistModal ? <PlaylistModal /> : null
  const lyricModal = modal.lyricModal ? <LyricModal /> : null
  const spotifyModal = modal.spotifyModal ? <SpotifyModal /> : null

  return (
    <main className="list">
      <ListHeader title={title} />
      <div className="list_container">
        <div className="title">
          <h1>{title}</h1>
          <h1>{user}</h1>
        </div>
        {isLoading ? <Spinner /> : null}
        <NewSong />
        <ShowList />
      </div>
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
  list: state.list,
  modal: state.modal
})

export default connect(mapStatetoProp)(Playlist)
