import React, { FC, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import Close from '../../assets/cross/close'
import SearchLyrics from './searchLyrics'
import ShowLyrics from './showLyrics'
import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'
import { closeLyricModal } from '../../logic/modal/modalAction'
import { clearLyrics } from '../../logic/lyrics/lyricsAction'
import { TrackInterface } from '../../logic/list/constants'

interface LyricsInterface {
  modal: boolean
  activeSong: TrackInterface
}

const Lyrics: FC<LyricsInterface> = ({ modal, activeSong }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  const dispatch = useDispatch()

  const exitModal = () => {
    dispatch(closeLyricModal())
    setIsComponentVisible(false)
  }

  useEffect(() => {
    return () => {
      dispatch(clearLyrics())
    }
  }, [dispatch])

  return (
    <div className="modal" role="dialog">
      {isComponentVisible && modal ? (
        <div ref={ref} className="modalContainer">
          <header className="modalHeader">
            <button onClick={exitModal}>
              <Close width={20} height={20} />
            </button>
          </header>
          <article>{activeSong.lyrics ? <ShowLyrics /> : <SearchLyrics />}</article>
        </div>
      ) : (
        dispatch(closeLyricModal()) && null
      )}
    </div>
  )
}

const mapStatetoProp = (state: any) => ({
  modal: state.modal.lyricModal,
  activeSong: state.activeList.current
})

export default connect(mapStatetoProp)(Lyrics)
