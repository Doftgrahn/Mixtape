import React, { FC } from 'react'
import { connect } from 'react-redux'
import SpotifyPlayer from 'react-spotify-web-playback'

const SpotifySearchResult: FC<any> = ({ spotify, needsRefresh }) => {
  const addSongToUser = (spotUrl: string) => {
    console.log('hej', spotUrl)
  }
  console.log(spotify)
  const renderSearchResult = spotify.map((song: any) => (
    <li key={song.id}>
      <h3>{song.name}</h3>
      <span>{song.albumName}</span>
      <h4>{song.artist}</h4>
      <img src={song.img} alt={song.name} />
      <button onClick={() => addSongToUser(song.spotUrl)}>Add me</button>
      <span>{song.previewURL}</span>
      <audio controls>
        <source src={song.previewURL} type="audio/ogg" />
      </audio>
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

  return <ul>{renderSearchResult} </ul>
}

const mapStatetoProp = (state: any) => ({
  spotify: state.spotify.spotify,
  needsRefresh: state.spotify.needsRefresh
})

export default connect(mapStatetoProp)(SpotifySearchResult)
