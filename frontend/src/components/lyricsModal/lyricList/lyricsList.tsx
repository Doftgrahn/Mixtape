import React, { FC } from 'react'
import { useDispatch, connect } from 'react-redux'

import Spinner from '../../shared/spinner/spinner'

import { fetchSetLyric } from '../../../logic/list/lyricsAction'

const LyricsList: FC<any> = ({ getLyrics, activeSong }) => {
  const { lyrics, isLoading } = getLyrics
  const { _id } = activeSong

  const dispatch = useDispatch()

  const setMyLyric = (url: string) => {
    dispatch(fetchSetLyric(url, _id))
  }

  const renderLyrics = lyrics.map((song: any) => (
    <div className="lyricsList_item" key={song.id}>
      <h4>{song.full_title}</h4>
      <button onClick={() => setMyLyric(song.url)}>Add</button>
    </div>
  ))
  return <div className="lyricsList">{isLoading ? <Spinner /> : renderLyrics}</div>
}

const mapStateToProps = (state: any) => ({
  getLyrics: state.lyrics,
  activeSong: state.activeList.current
})

export default connect(mapStateToProps)(LyricsList)
