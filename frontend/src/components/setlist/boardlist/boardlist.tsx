import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setActiveBoard as activeBoard } from '../../../logic/activeBoard/activeBoardAction'

import { BoardInterface } from '../../../logic/types'
import NewBoard from '../newboard/newBoard'

import Spinner from '../../shared/spinner/spinner'

const BoardList: FC<any> = ({ setlist }) => {
  const { loading } = setlist
  const dispatch = useDispatch()

  const setActiveBoard = (id: string): any => dispatch(activeBoard(id))

  const renderMyBoards = setlist.boards.map((board: BoardInterface): any => (
    <li key={board._id}>
      <Link tabIndex={0} onClick={() => setActiveBoard(board._id)} to={`/dashboard/${board.title}`}>
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
