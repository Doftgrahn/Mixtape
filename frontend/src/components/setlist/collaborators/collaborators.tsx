import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setActiveBoard as activeBoard } from '../../../logic/activeBoard/activeBoardAction'

import { BoardInterface } from '../../../logic/types'

const Collaborators: FC<any> = ({ setlist }) => {
  const dispatch = useDispatch()

  const setActiveBoard = (board: any) => dispatch(activeBoard(board))

  const renderMyBoards = setlist.collaborators.map((board: BoardInterface): any => (
    <li key={board._id}>
      <Link tabIndex={0} onClick={() => setActiveBoard(board)} to={`/dashboard/${board.title}`}>
        <h3>{board.title}</h3>
      </Link>
    </li>
  ))
  return <ul className="boardlist">{renderMyBoards}</ul>
}

const mapStateToProps = (state: any) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(Collaborators)
