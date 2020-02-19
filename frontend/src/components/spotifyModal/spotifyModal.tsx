import React, { FC, useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'
import Close from '../../assets/cross/close'
import SpotifySearchResult from './spotifySearchResult/spotifySearchResult'

import { toggleSpotifyModal } from '../../logic/modal/modalAction'
import { getSpotifySearch } from '../../logic/spotify/spotifyAction'

import useDebounce from '../../utils/debounce/debounce'

interface SpotifyModalInterface {
  modal: boolean
}

const SpotifyModal: FC<SpotifyModalInterface> = ({ modal }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 1000)
  const dispatch = useDispatch()

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getSpotifySearch(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm, dispatch, search])

  const exitModal = () => {
    dispatch(toggleSpotifyModal())
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
              onChange={e => setSearch(e.target.value)}
              placeholder="Search on spotify"
              autoFocus
            />
            <SpotifySearchResult />
            {/*<button onClick={searchForSong}>Search...</button>*/}
          </div>
        </div>
      ) : (
        dispatch(toggleSpotifyModal()) && null
      )}
    </div>
  )
}

const mapStatetoProp = (state: any) => ({
  modal: state.modal.spotifyModal
})

export default connect(mapStatetoProp)(SpotifyModal)
