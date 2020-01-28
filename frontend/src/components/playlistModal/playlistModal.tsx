import React, { FC, useState, useEffect } from 'react'
import { addToList } from '../../logic/list/listAction'
import { useDispatch, connect } from 'react-redux'
import ModalInput from '../shared/modalInput/modalInput'

import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'

import Close from '../../assets/cross/close'

import { closePlaylistModal } from '../../logic/modal/modalAction'

const PlaylistModal: FC<any> = ({ modal }) => {
  const dispatch = useDispatch()
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  const [title, setTitle] = useState('')

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        dispatch(closePlaylistModal())
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [dispatch])

  const addSong = (): void => {
    if (title) {
      dispatch(addToList(title))
      setTitle('')
      dispatch(closePlaylistModal())
      setIsComponentVisible(false)
    }
  }

  const exitModal = () => {
    dispatch(closePlaylistModal())
    setIsComponentVisible(false)
  }

  const pressEnter = (e: any) => (e.key === 'Enter' ? addSong() : null)

  return (
    <main className="modal">
      {isComponentVisible && modal ? (
        <article ref={ref} className="modalContainer">
          <header className="modalHeader">
            <button onClick={exitModal}>
              <Close width={20} height={20} />
            </button>
          </header>
          <div className="input_wrapper">
            <h1>Add a Song!</h1>
            <ModalInput
              value={title}
              setValue={setTitle}
              pressEnter={pressEnter}
              placeholder="Add a song!"
            />
            <button tabIndex={0} onClick={addSong}>
              Add song!
            </button>
          </div>
        </article>
      ) : (
        dispatch(closePlaylistModal()) && null
      )}
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  modal: state.modal.playlistModal
})

export default connect(mapStateToProps)(PlaylistModal)
