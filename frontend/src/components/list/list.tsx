import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'

import AddToList from './addtolist/addtoList'
import ActiveSong from '../activeSong/activeSong'
import ShowList from './showlist/showList'

const List: FC<any> = ({ history, activeBoard, match }) => {
  const { title } = match.params
  return (
    <main className="list">
      <header>
        <button onClick={history.goBack}>go back</button>
      </header>
      <h1>{title}</h1>
      <AddToList />
      <ShowList />
      <ActiveSong />
    </main>
  )
}

const mapStatetoProp = (state: any) => ({
  activeBoard: state.activeBoard
})

export default connect(mapStatetoProp)(List)
