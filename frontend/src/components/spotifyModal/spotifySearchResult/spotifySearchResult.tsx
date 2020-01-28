import React, { FC } from 'react'
import { useDispatch, connect } from 'react-redux'

const SpotifySearchResult: FC<any> = ({ spotify }) => {
  const dispatch = useDispatch()

  const addSongToUser = () => {
    console.log('hej')
  }
  const renderSearchResult = spotify.map((song: any) => (
    <li key={song.id}>
      <h3>{song.name}</h3>
      <span>{song.albumName}</span>
      <h4>{song.artist}</h4>
      <img src={song.img} alt={song.name} />
      <button onClick={addSongToUser}>Add me</button>
    </li>
  ))

  return <ul>{renderSearchResult}</ul>
}

const mapStatetoProp = (state: any) => ({
  spotify: state.spotify.spotify
})

export default connect(mapStatetoProp)(SpotifySearchResult)
