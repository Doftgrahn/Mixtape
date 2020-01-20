import React, { FC } from 'react'

import { useDispatch, connect } from 'react-redux'
import { fetchSetLyric } from '../../../logic/list/lyricsAction'

const LyricsList: FC<any> = ({ lyrics, activeSong }) => {
  const dispatch = useDispatch()
  const { _id } = activeSong

  const setMyLyric = (url: string) => {
    dispatch(fetchSetLyric(url, _id))
  }

  const renderLyrics = lyrics.map((song: any) => (
    <div key={song.id}>
      <h3>{song.full_title}</h3>
      <button onClick={() => setMyLyric(song.url)}>get Lyric</button>
    </div>
  ))
  return <div>{renderLyrics}</div>
}

const mapStateToProps = (state: any) => ({
  lyrics: state.lyrics.lyrics,
  activeSong: state.activeList.current
})

export default connect(mapStateToProps)(LyricsList)
