import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setActiveBoard as activeBoard } from '../../../logic/activeBoard/activeBoardAction'
import { deletion } from '../../../logic/board/boardAction'

import { BoardInterface } from '../../../logic/types'
import NewBoard from '../newboard/newBoard'

const BoardList: FC<any> = ({ allBoards }) => {
  const dispatch = useDispatch()

  const setActiveBoard = (id: string): any => dispatch(activeBoard(id))
  const deleteBoard = (id: string) => dispatch(deletion(id))

  const renderMyBoards = allBoards.boards.map((board: BoardInterface): any => (
    <li key={board._id}>
      <Link tabIndex={0} onClick={() => setActiveBoard(board._id)} to={`/dashboard/${board.title}`}>
        <h3>{board.title}</h3>
      </Link>
    </li>
  ))

  return (
    <ul className="boardlist">
      <NewBoard />
      {renderMyBoards}
    </ul>
  )
}

const mapStateToProps = (state: any) => ({
  allBoards: state.board
})

export default connect(mapStateToProps)(BoardList)
