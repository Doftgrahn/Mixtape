import React, { FC } from 'react'
import { connect } from 'react-redux'

import AddToList from './playlist/addtolist/addtoList'
import ActiveSong from './activeSong/activeSong'
import ShowList from './playlist/showlist/showList'
import ListHeader from './playlist/listHeader/listHeader'
import Spinner from './shared/spinner/spinner'

import { PlaylistInterface } from '../types'

const Playlist: FC<PlaylistInterface> = ({ match, list }) => {
  const { isLoading } = list
  const { title } = match.params

  return (
    <main className="list">
      <ListHeader title={title} />
      <div className="list_container">
        <h1>{title}</h1>
        {isLoading ? <Spinner /> : null}
        <AddToList />
        <ShowList />
      </div>
      <ActiveSong />
    </main>
  )
}

const mapStatetoProp = (state: any) => ({
  list: state.list
})

export default connect(mapStatetoProp)(Playlist)
