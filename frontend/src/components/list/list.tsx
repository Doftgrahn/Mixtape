import React, { FC } from 'react'

import AddToList from './addtolist/addtoList'
import ActiveSong from '../activeSong/activeSong'
import ShowList from './showlist/showList'

const List: FC<any> = ({ history }) => {
  return (
    <main className="list">
      <header>
        <button onClick={history.goBack}>go back</button>
      </header>
      <AddToList />
      <ShowList />
      <ActiveSong />
    </main>
  )
}

export default List
