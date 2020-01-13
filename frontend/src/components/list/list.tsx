import React, { FC } from 'react'

import AddToList from './addtolist/addtoList'
import ActiveSong from '../activeSong/activeSong'
import ShowList from './showlist/showList'

const List: FC<any> = () => {
  return (
    <main>
      Lista med låtar!
      <AddToList />
      <ShowList />
      <ActiveSong />
    </main>
  )
}

export default List
