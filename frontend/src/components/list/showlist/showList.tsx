import React, { useEffect, FC } from 'react'

import { connect } from 'react-redux'

import { useDispatch } from 'react-redux'
import { fetchSongList } from '../../../logic/list/listAction'
import { setCurrentSong } from '../../../logic/activeList/activeListAction'

const ShowList: FC<any> = ({ playlist }) => {
  const { list } = playlist
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongList())
  }, [dispatch])

  const setActiveSong = (id: string) => dispatch(setCurrentSong(id))

  const renderPlaylist = list.map((list: any) => (
    <li key={list._id}>
      <h3>{list.artist}</h3>
      <h3>{list.song}</h3>
      <button onClick={() => setActiveSong(list)}>meny</button>
    </li>
  ))

  return (
    <ul className="playlist">
      {list.length === 0 ? <h1>Här var det tomt med låtar!</h1> : renderPlaylist}
    </ul>
  )
}

const mapStateToProps = (state: any) => ({
  playlist: state.list
})

export default connect(mapStateToProps)(ShowList)
