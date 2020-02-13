import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'

import { addSpotifyTrack } from '../../../logic/list/listAction'
import { hideSpotifyModal } from '../../../logic/modal/modalAction'

const SpotifySearchResult: FC<any> = ({ spotify, needsRefresh }) => {
  const dispatch = useDispatch()

  const addSongToUser = (song: any) => {
    const data = {
      id: song.id,
      uri: song.uri
    }
    dispatch(addSpotifyTrack(data))
    dispatch(hideSpotifyModal())
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
        <h3>Du behöver logga in med spotify för att forsätta!</h3>
        <a href={url}>Logga in.</a>
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
