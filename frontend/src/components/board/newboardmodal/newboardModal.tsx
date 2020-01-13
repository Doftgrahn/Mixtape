import React, { FC, useState, useEffect } from 'react'
import { addBoard } from '../../../logic/board/boardAction'
import { useDispatch, connect } from 'react-redux'

const BoardModal: FC<any> = ({ auth, hideModal }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const { id } = auth.user

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
        userId: id,
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
  }

  return (
    <main className="newBoardModal">
      <article>
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
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(BoardModal)
