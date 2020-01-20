import React, { useEffect, FC } from 'react'

import { connect } from 'react-redux'

import { useDispatch } from 'react-redux'
import { fetchSongList } from '../../../logic/list/listAction'
import { activeSong, setCurrentSong } from '../../../logic/activeList/activeListAction'

import Paper from '../../../assets/paper/paper'
import { showLyricModal } from '../../../logic/modal/modalAction'

const ShowList: FC<any> = ({ playlist }) => {
  const { list } = playlist
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongList())
  }, [dispatch])

  const setActiveSong = (id: string) => dispatch(activeSong(id))

  const shortCutLyrics = (song: any) => {
    dispatch(setCurrentSong(song))
    dispatch(showLyricModal())
  }

  const renderPlaylist = list.map((list: any) => (
    <li key={list._id}>
      <div className="song">
        <h3>{list.title}</h3>
      </div>
      <div className="edit">
        {list.lyrics ? (
          <button onClick={id => shortCutLyrics(list)}>
            <Paper height={20} width={20} />
          </button>
        ) : null}
        <button onClick={() => setActiveSong(list._id)}>Edit / More info</button>
      </div>
    </li>
  ))

  return <ul className="playlist">{renderPlaylist}</ul>
}

const mapStateToProps = (state: any) => ({
  playlist: state.list
})

export default connect(mapStateToProps)(ShowList)
