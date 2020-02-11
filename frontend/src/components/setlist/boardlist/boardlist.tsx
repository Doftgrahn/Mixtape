import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setActiveBoard as activeBoard } from '../../../logic/activeBoard/activeBoardAction'
import { BoardInterface } from '../../../logic/types'

import NewBoard from '../newboard/newBoard'
import Spinner from '../../shared/spinner/spinner'

const BoardList: FC<any> = ({ setlist }) => {
  const { loading } = setlist
  const dispatch = useDispatch()

  const setActiveBoard = (board: any): any => dispatch(activeBoard(board))

  const renderMyBoards = setlist.boards.map((board: BoardInterface): any => (
    <li key={board._id} title={`Setlist: ${board.title}`}>
      <Link tabIndex={0} onClick={() => setActiveBoard(board)} to={`/dashboard/${board.title}`}>
        <p>{board.description}</p>
        <h3>{board.title}</h3>
      </Link>
    </li>
  ))

  return (
    <ul className="boardlist">
      {loading ? <Spinner /> : null}
      <NewBoard />
      {renderMyBoards}
    </ul>
  )
}

const mapStateToProps = (state: any) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(BoardList)
