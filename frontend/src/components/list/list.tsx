import React, { FC } from 'react'

import ShowList from './showList'
import AddToList from './addtoList'

const List: FC<any> = () => {
  return (
    <main>
      Lista med låtar!
      <AddToList />
      <ShowList />
    </main>
  )
}

export default List
