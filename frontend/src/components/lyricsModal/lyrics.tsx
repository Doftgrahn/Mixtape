import React, { FC, useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'

import LyricsList from './lyricList/lyricsList'
import Close from '../../assets/cross/close'
import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'
import { fetchgetTracks } from '../../logic/lyrics/lyricsAction'
import { closeLyricModal } from '../../logic/modal/modalAction'

const Lyrics: FC<any> = ({ modal }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  const dispatch = useDispatch()
  const [song, setSong] = useState('')

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        dispatch(closeLyricModal())
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [dispatch])

  const getAllTracks = () => {
    if (song) {
      dispatch(fetchgetTracks(song))
    }
  }

  const pressEnter = (e: any) => (e.key === 'Enter' ? getAllTracks() : null)

  const exitModal = () => {
    dispatch(closeLyricModal())
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
          <article>
            <div className="input_wrapper">
              <input
                type="text"
                value={song}
                onChange={e => setSong(e.target.value)}
                onKeyPress={e => pressEnter(e)}
                placeholder="search for a song..."
                autoFocus
              />
              <button onClick={getAllTracks}>Check for lyrics</button>
            </div>
            <LyricsList />
          </article>
        </div>
      ) : (
        dispatch(closeLyricModal()) && null
      )}
    </div>
  )
}

const mapStatetoProp = (state: any) => ({
  modal: state.modal.lyricModal
})

export default connect(mapStatetoProp)(Lyrics)
