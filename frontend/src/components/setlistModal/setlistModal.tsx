import React, { FC, useState, useEffect } from 'react'
import { addBoard } from '../../logic/setlist/setlistAction'
import { useDispatch, connect } from 'react-redux'

import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'

import Close from '../../assets/cross/close'
import ModalInput from '../shared/modalInput/modalInput'

import { closeSetlistModal } from '../../logic/modal/modalAction'

const SetlistModal: FC<any> = ({ auth, modal }) => {
  const dispatch = useDispatch()
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  const [title, setTitle] = useState('')

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

  const createBoard = () => {
    if (title) {
      const data = {
        userId: auth.user.id,
        title: title
      }
      dispatch(addBoard(data))
      setTitle('')
      dispatch(closeSetlistModal())
    }
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
            <button tabIndex={0} onClick={createBoard}>
              add setlist!
            </button>
          </div>
        </article>
      ) : (
        dispatch(closeSetlistModal()) && null
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  modal: state.modal.setlistModal
})

export default connect(mapStateToProps)(SetlistModal)
