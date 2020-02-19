import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'

import { addSpotifyTrack } from '../../../logic/list/listAction'
import { toggleSpotifyModal } from '../../../logic/modal/modalAction'
import { SpotifyInterface } from '../../../logic/spotify/types'

interface SpotifySearchResult {
  spotify: SpotifyInterface[]
  needsRefresh: boolean
}

const SpotifySearchResult: FC<SpotifySearchResult> = ({ spotify, needsRefresh }) => {
  const dispatch = useDispatch()

  const addSongToUser = (song: any) => {
    const data = {
      id: song.id,
      uri: song.uri
    }
    dispatch(addSpotifyTrack(data))
    dispatch(toggleSpotifyModal())
  }

  const renderSearchResult = spotify.map((song: any) => (
    <li className="spotifySearchResult" key={song.id}>
      <img className="spotifyIMG" src={song.img} alt={song.name} />

      <div className="info_container">
        <p>{song.artist}</p>

        <p>{song.name}</p>
        <p>{song.albumName}</p>
      </div>
      <button className="addSpotifytrack-btn" onClick={() => addSongToUser(song)}>
        Add me
      </button>
    </li>
  ))

  if (needsRefresh) {
    let url = 'https://www.mixtape.nu/api/users/spotify'
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:4000/api/users/spotify'
    }

    return (
      <div>
        <h3>Yo! You need to log into Spotify to continue.</h3>
        <a href={url}>Log in.</a>
      </div>
    )
  }

  return <ul className="spotifyListContainer">{renderSearchResult} </ul>
}

const mapStatetoProp = (state: any) => ({
  spotify: state.spotify.spotify,
  needsRefresh: state.spotify.needsRefresh
})

export default connect(mapStatetoProp)(SpotifySearchResult)
