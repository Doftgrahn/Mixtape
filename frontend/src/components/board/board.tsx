import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { BoardInterface } from '../../logic/types'
import { useDispatch } from 'react-redux'

import { setActiveBoard as activeBoard } from '../../logic/activeBoard/activeBoardAction'

const Board: FC<any> = ({ allBoards }) => {
  const dispatch = useDispatch()

  const setActiveBoard = (id: string): any => dispatch(activeBoard(id))

  const renderMyBoards = allBoards.boards.map((board: BoardInterface): any => (
    <Link
      onClick={id => setActiveBoard(board._id)}
      to={`/${board.userId}/${board._id}`}
      key={board._id}>
      {board.title}
    </Link>
  ))

  return <main> {renderMyBoards}</main>
}

const mapStateToProps = (state: any) => ({
  allBoards: state.board
})

export default connect(mapStateToProps)(Board)
