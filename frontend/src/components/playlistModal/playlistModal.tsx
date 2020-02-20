import React, { FC, useState, useEffect } from 'react'
import { addToList } from '../../logic/list/listAction'
import { useDispatch, connect } from 'react-redux'
import ModalInput from '../shared/modalInput/modalInput'
import Modal from '../shared/modal/modal'
import { togglePlaylistModal } from '../../logic/modal/modalAction'
import { RootStateInterface } from '../../logic/types'

interface PlaylistModalInterface {
  modal: boolean
}

const PlaylistModal: FC<PlaylistModalInterface> = ({ modal }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [dirty, setIsDirty] = useState(false)

  useEffect(() => {
    if (title) {
      setIsDirty(false)
    }
  }, [title])

  const addSong = (): void => {
    if (!title) {
      return setIsDirty(true)
    }
    dispatch(addToList(title))
    setTitle('')
    dispatch(togglePlaylistModal())
  }

  const pressEnter = (e: any) => (e.key === 'Enter' ? addSong() : null)

  return (
    <Modal modal={modal} toggleModal={togglePlaylistModal}>
      <div className="input_wrapper">
        <h1>Add a Song!</h1>
        <ModalInput
          value={title}
          setValue={setTitle}
          pressEnter={pressEnter}
          placeholder="Add a song!"
        />
        <button className="modal_add_btn" tabIndex={0} onClick={addSong}>
          Add song!
        </button>
        {dirty ? <p className="errorMessageModal">Yo! You need to write something!</p> : null}
      </div>
    </Modal>
  )
}

const mapStateToProps = (state: RootStateInterface) => ({
  modal: state.modal.playlistModal
})

export default connect(mapStateToProps)(PlaylistModal)
