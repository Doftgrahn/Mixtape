import React, { FC, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import Modal from '../shared/modal/modal'
import SearchLyrics from './searchLyrics'
import ShowLyrics from './showLyrics'
import { toggleLyricsModal } from '../../logic/modal/modalAction'
import { clearLyrics } from '../../logic/lyrics/lyricsAction'
import { TrackInterface } from '../../logic/list/constants'
import { RootStateInterface } from '../../logic/types'

interface LyricsInterface {
  modal: boolean
  activeSong: TrackInterface
}

const Lyrics: FC<LyricsInterface> = ({ modal, activeSong }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(clearLyrics())
    }
  }, [dispatch])

  return (
    <Modal modal={modal} toggleModal={toggleLyricsModal}>
      {activeSong.lyrics ? <ShowLyrics /> : <SearchLyrics />}
    </Modal>
  )
}

const mapStatetoProp = (state: RootStateInterface) => ({
  modal: state.modal.lyricModal,
  activeSong: state.activeList
})

export default connect(mapStatetoProp)(Lyrics)
