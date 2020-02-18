import React, { FC, useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import Close from '../../assets/cross/close'
import ModalInput from '../shared/modalInput/modalInput'
import { addBoard } from '../../logic/setlist/setlistAction'
import { closeSetlistModal } from '../../logic/modal/modalAction'
import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'
import { UserInterface } from '../../logic/auth/contants'

interface SetlistModalInterface {
  user: UserInterface
  modal: boolean
}

const SetlistModal: FC<SetlistModalInterface> = ({ user, modal }) => {
  const dispatch = useDispatch()
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  const [title, setTitle] = useState('')
  const [dirty, setIsDirty] = useState(false)

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        dispatch(closeSetlistModal())
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [dispatch])

  useEffect(() => {
    if (title) {
      setIsDirty(false)
    }
  }, [title])

  const createBoard = () => {
    if (!title) {
      return setIsDirty(true)
    }
    const data = {
      userId: user.id,
      title: title
    }
    dispatch(addBoard(data))
    setTitle('')
    dispatch(closeSetlistModal())
  }

  const pressEnter = (e: any) => {
    if (e.key === 'Enter') {
      createBoard()
    }
  }

  const exitModal = () => {
    dispatch(closeSetlistModal())
    setIsComponentVisible(false)
  }

  return (
    <div className="modal newBoardModal">
      {isComponentVisible && modal ? (
        <article className="modalContainer" ref={ref}>
          <header className="modalHeader">
            <button onClick={exitModal}>
              <Close width={20} height={20} />
            </button>
          </header>
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
        </article>
      ) : (
        dispatch(closeSetlistModal()) && null
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
  modal: state.modal.setlistModal
})

export default connect(mapStateToProps)(SetlistModal)
