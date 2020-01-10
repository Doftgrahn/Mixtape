import React, { useState, FC } from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { addBoard } from '../../logic/board/boardAction'

const NewBoard: FC<any> = ({ auth }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const { id } = auth.user

  const createBoard = () => {
    if (title) {
      const data = {
        userId: id,
        title: title
      }
      dispatch(addBoard(data))
    }
    setTitle('')
  }

  return (
    <main>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={createBoard}>add Board</button>
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(NewBoard)
