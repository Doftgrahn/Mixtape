import React, { FC, useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import Modal from '../shared/modal/modal'
import SpotifySearchResult from './spotifySearchResult/spotifySearchResult'
import { toggleSpotifyModal } from '../../logic/modal/modalAction'
import { getSpotifySearch } from '../../logic/spotify/spotifyAction'
import useDebounce from '../../utils/debounce/debounce'
import { RootStateInterface } from '../../logic/types'

interface SpotifyModalInterface {
  modal: boolean
}

const SpotifyModal: FC<SpotifyModalInterface> = ({ modal }) => {
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 1000)
  const dispatch = useDispatch()

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getSpotifySearch(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm, dispatch, search])

  return (
    <Modal modal={modal} toggleModal={toggleSpotifyModal}>
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
      </div>
    </Modal>
  )
}

const mapStatetoProp = (state: RootStateInterface) => ({
  modal: state.modal.spotifyModal
})

export default connect(mapStatetoProp)(SpotifyModal)
