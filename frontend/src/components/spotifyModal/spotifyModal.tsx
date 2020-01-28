import React, { FC, useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'
import { hideSpotifyModal } from '../../logic/modal/modalAction'
import Close from '../../assets/cross/close'

import { getSpotifySearch } from '../../logic/spotify/spotifyAction'
import SpotifySearchResult from './spotifySearchResult/spotifySearchResult'

const SpotifyModal: FC<any> = ({ modal }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const pressEnter = (e: any) => {
    if (e.key === 'Enter') {
      searchForSong(e)
    }
  }

  const searchForSong = (e: any) => {
    dispatch(getSpotifySearch(search))
    setSearch(e.target.value)
  }

  const exitModal = () => {
    dispatch(hideSpotifyModal())
    setIsComponentVisible(false)
  }

  return (
    <div className="modal" role="dialog">
      {isComponentVisible && modal ? (
        <div ref={ref} className="modalContainer">
          <header className="modalHeader">
            <button onClick={exitModal}>
              <Close width={20} height={20} />
            </button>
          </header>
          <div className="input_wrapper">
            <h1>Add song from Spotify</h1>
            <input
              type="text"
              value={search}
              onChange={e => searchForSong(e)}
              placeholder="Search on spotify"
              onKeyPress={e => pressEnter(e)}
              autoFocus
            />
            <SpotifySearchResult />

            <button onClick={searchForSong}>Search...</button>
          </div>
        </div>
      ) : (
        dispatch(hideSpotifyModal()) && null
      )}
    </div>
  )
}

const mapStatetoProp = (state: any) => ({
  modal: state.modal.spotifyModal
})

export default connect(mapStatetoProp)(SpotifyModal)
