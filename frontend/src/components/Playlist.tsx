import React, { FC } from 'react'
import { connect } from 'react-redux'

import NewSong from './playlist/addtolist/addtoList'
import ActiveSong from './activeSong/activeSong'
import ShowList from './playlist/showlist/showList'
import ListHeader from './playlist/listHeader/listHeader'
import Spinner from './shared/spinner/spinner'
import PlaylistModal from './playlistModal/playlistModal'

import { PlaylistInterface } from '../types'

const Playlist: FC<PlaylistInterface> = ({ match, list, modal }) => {
  const { isLoading } = list
  const { title } = match.params

  const playlistModal = modal ? <PlaylistModal /> : null

  return (
    <main className="list">
      <ListHeader title={title} />
      <div className="list_container">
        <h1>{title}</h1>
        {isLoading ? <Spinner /> : null}
        <NewSong />
        <ShowList />
      </div>
      <ActiveSong />
      {playlistModal}
    </main>
  )
}

const mapStatetoProp = (state: any) => ({
  list: state.list,
  modal: state.modal.playlistModal
})

export default connect(mapStatetoProp)(Playlist)
