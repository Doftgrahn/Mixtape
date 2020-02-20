import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootStateInterface } from '../../../logic/types'

const Playsong: FC<{}> = () => {
  const track: string = useSelector((state: RootStateInterface) => state.activeList.spotifyTrackID)

  if (!track) return null
  return (
    <figure className="spotify_track_container">
      <iframe
        src={`https://open.spotify.com/embed/track/${track}`}
        width="300"
        height="380"
        allow="encrypted-media"
        title={track}
      />
    </figure>
  )
}

export default Playsong
