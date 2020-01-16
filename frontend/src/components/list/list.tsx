import React, { FC } from 'react'
import { connect, useSelector } from 'react-redux'

import AddToList from './addtolist/addtoList'
import ActiveSong from '../activeSong/activeSong'
import ShowList from './showlist/showList'
import ListHeader from './listHeader/listHeader'
import Spinner from '../shared/spinner/spinner'

const List: FC<any> = ({ history, match, list }) => {
  const { isLoading } = list
  const { title } = match.params
  console.log(list)
  return (
    <main className="list">
      <ListHeader history={history} title={title} />
      <div className="list_container">
        <h1>{title}</h1>
        {isLoading ? <Spinner /> : null}
        {!isLoading ? <AddToList /> : null}
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

export default connect(mapStatetoProp)(List)
