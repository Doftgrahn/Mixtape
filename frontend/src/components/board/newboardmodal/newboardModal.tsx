import React, { FC, useState, useEffect } from 'react'
import { addBoard } from '../../../logic/board/boardAction'
import { useDispatch, connect } from 'react-redux'

import { useComponentVisible } from '../../../utils/useComponentVisible/useComponentVisible'

import Close from '../../../assets/cross/close'

const BoardModal: FC<any> = ({ auth, isVisible, hideModal }) => {
  const dispatch = useDispatch()
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  const [title, setTitle] = useState('')

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        hideModal()
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [hideModal])

  const createBoard = () => {
    if (title) {
      const data = {
        userId: auth.user.id,
        title: title
      }
      dispatch(addBoard(data))
      hideModal()
    }
    setTitle('')
  }

  const pressEnter = (e: any) => {
    if (e.key === 'Enter') {
      createBoard()
    }
  }

  const exitModal = () => {
    hideModal()
    setIsComponentVisible(false)
  }

  return (
    <main className="modal newBoardModal">
      {isComponentVisible && isVisible ? (
        <article className="modalContainer" ref={ref}>
          <header className="modalHeader">
            <button onClick={exitModal}>
              <Close width={20} height={20} />
            </button>
          </header>
          <div className="input_wrapper">
            <h1>Create New Setlist</h1>
            <input
              tabIndex={0}
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyPress={e => pressEnter(e)}
              placeholder="new setlist"
              autoFocus
            />
            <button tabIndex={0} onClick={createBoard}>
              add setlist!
            </button>
          </div>
        </article>
      ) : (
        hideModal()
      )}
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(BoardModal)
