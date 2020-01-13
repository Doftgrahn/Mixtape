import React, { useEffect, FC } from 'react'

import { connect } from 'react-redux'

import { useDispatch } from 'react-redux'
import { fetchSongList, deleteListItem } from '../../../logic/list/listAction'
import { setCurrentSong } from '../../../logic/activeList/activeListAction'

const ShowList: FC<any> = ({ playlist }) => {
  const { list } = playlist
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongList())
  }, [dispatch])

  const setActiveSong = (id: string) => dispatch(setCurrentSong(id))

  const deletion = (id: any) => dispatch(deleteListItem(id))

  const renderPlaylist = list.map((list: any) => (
    <li key={list._id}>
      <button onClick={() => setActiveSong(list)}>{list.title}</button>
      <button onClick={() => deletion(list._id)}>delete</button>
    </li>
  ))

  return <section>{renderPlaylist}</section>
}

const mapStateToProps = (state: any) => ({
  playlist: state.list
})

export default connect(mapStateToProps)(ShowList)
