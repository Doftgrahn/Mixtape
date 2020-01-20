import React, { FC } from 'react'
import { connect } from 'react-redux'

import AddToList from './playlist/addtolist/addtoList'
import ActiveSong from './activeSong/activeSong'
import ShowList from './playlist/showlist/showList'
import ListHeader from './playlist/listHeader/listHeader'
import Spinner from './shared/spinner/spinner'

const Playlist: FC<any> = ({ history, match, list }) => {
  const { isLoading } = list
  const { title } = match.params
  return (
    <main className="list">
      <ListHeader history={history} title={title} />
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
  activeBoard: state.activeBoard,
  list: state.list
})

export default connect(mapStatetoProp)(Playlist)
