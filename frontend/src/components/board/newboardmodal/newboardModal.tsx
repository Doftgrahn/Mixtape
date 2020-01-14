import React, { FC, useState, useEffect } from 'react'
import { addBoard } from '../../../logic/board/boardAction'
import { useDispatch, connect } from 'react-redux'

import { useComponentVisible } from '../../../utils/useComponentVisible/useComponentVisible'

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
    <main className="newBoardModal">
      {isComponentVisible && isVisible ? (
        <article ref={ref}>
          <header>
            <button onClick={exitModal}>x</button>
          </header>
          <div className="input_wrapper">
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyPress={e => pressEnter(e)}
              placeholder="new setlist"
              autoFocus
            />
            <button onClick={createBoard}>add board</button>
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
