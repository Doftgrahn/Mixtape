import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { BoardInterface } from '../../logic/types'
import { useDispatch } from 'react-redux'

import { setActiveBoard as activeBoard } from '../../logic/activeBoard/activeBoardAction'

import { deletion } from '../../logic/board/boardAction'
const Board: FC<any> = ({ allBoards }) => {
  const dispatch = useDispatch()

  const setActiveBoard = (id: string): any => dispatch(activeBoard(id))

  const deleteBoard = (id: string) => dispatch(deletion(id))

  const renderMyBoards = allBoards.boards.map((board: BoardInterface): any => (
    <li key={board._id}>
      <Link onClick={() => setActiveBoard(board._id)} to={`/home/${board.userId}/${board._id}`}>
        {board.title}
      </Link>
      <button onClick={() => deleteBoard(board._id)}>Delete</button>
    </li>
  ))

  return <main> {renderMyBoards}</main>
}

const mapStateToProps = (state: any) => ({
  allBoards: state.board
})

export default connect(mapStateToProps)(Board)
