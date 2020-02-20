import React, { FC, useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import ModalInput from '../shared/modalInput/modalInput'
import { addBoard } from '../../logic/setlist/setlistAction'
import { toggleSetlistModal } from '../../logic/modal/modalAction'
import { UserInterface } from '../../logic/auth/contants'

import Modal from '../shared/modal/modal'
import { RootStateInterface } from '../../logic/types'

interface SetlistModalInterface {
  user: UserInterface
  modal: boolean
}

const SetlistModal: FC<SetlistModalInterface> = ({ user, modal }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [dirty, setIsDirty] = useState(false)

  useEffect((): void => {
    if (title) {
      setIsDirty(false)
    }
  }, [title])

  const createBoard = (): void => {
    if (!title) {
      return setIsDirty(true)
    }
    const data = {
      userId: user.id,
      title: title
    }
    dispatch(addBoard(data))
    setTitle('')
    dispatch(toggleSetlistModal())
  }

  const pressEnter = (e: any): void => {
    if (e.key === 'Enter') {
      createBoard()
    }
  }

  return (
    <Modal modal={modal} toggleModal={toggleSetlistModal}>
      <div className="input_wrapper">
        <h1>Create New Setlist</h1>
        <ModalInput
          value={title}
          setValue={setTitle}
          pressEnter={pressEnter}
          placeholder="New Setlist"
        />
        <button className="modal_add_btn" tabIndex={0} onClick={createBoard}>
          add setlist!
        </button>
        {dirty ? <p className="errorMessageModal">Yo! You need to write something!</p> : null}
      </div>
    </Modal>
  )
}

const mapStateToProps = (state: RootStateInterface) => ({
  user: state.auth.user,
  modal: state.modal.setlistModal
})

export default connect(mapStateToProps)(SetlistModal)
