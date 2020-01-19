import React, { FC, useEffect, useState } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser'
import { connect } from 'react-redux'

import Board from './board/board'
import axios from 'axios'

//import { getLyrics } from 'genius-lyrics-api'

const MixTape: FC<any> = () => {
  const [lyric, setLyric] = useState()

  useEffect(() => {
    const test = `https://api.genius.com/artists/16775?access_token=${process.env.react_app_genius_token}`
    const searchUrl = `http://api.genius.com/search?q=madonna&access_token=${process.env.react_app_genius_token}`
    const song = `http://api.genius.com/songs/740494?access_token=${process.env.react_app_genius_token}`

    fetch(song)
      .then(result => {
        return result.json()
      })
      .then(string => {
        console.log(string)
        setLyric(string.response.song.url)
      })
      .catch(error => {
        console.log('error', error)
      })
  }, [])

  return (
    <main>
      <Board />
    </main>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(MixTape)
