import React, { FC } from 'react'
import { connect, useSelector } from 'react-redux'

import AddToList from './addtolist/addtoList'
import ActiveSong from '../activeSong/activeSong'
import ShowList from './showlist/showList'
import ListHeader from './listHeader/listHeader'

const List: FC<any> = ({ history, match }) => {
  const { title } = match.params
  return (
    <main className="list">
      <ListHeader history={history} title={title} />
      <div className="list_container">
        <h1>{title}</h1>
        <AddToList />
        <ShowList />
      </div>
      <ActiveSong />
    </main>
  )
}

const mapStatetoProp = (state: any) => ({
  activeBoard: state.activeBoard
})

export default connect(mapStatetoProp)(List)
