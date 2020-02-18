import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setActiveBoard as activeBoard } from '../../../logic/activeBoard/activeBoardAction'

import Account from '../../../assets/account/account'
import { BoardInterface } from '../../../logic/types'

interface SetlistItemInterface {
  board: BoardInterface
}

const SetlistItem: FC<SetlistItemInterface> = ({ board }) => {
  const dispatch = useDispatch()
  const setActiveBoard = (board: object) => dispatch(activeBoard(board))

  const showOwnerIfnotOwner = !board.isOwner && <span>{board.user}</span>

  const howmanyIfowner =
    board.isOwner && board.collaborators.length ? board.collaborators.length : <span>Only you</span>

  return (
    <li key={board._id} title={`Setlist: ${board.title}`}>
      <Link tabIndex={0} onClick={() => setActiveBoard(board)} to={`/dashboard/${board.title}`}>
        <p>
          <Account height={20} width={20} />
          {showOwnerIfnotOwner}
          {howmanyIfowner}
        </p>
        <h3>{board.title}</h3>
      </Link>
    </li>
  )
}
export default SetlistItem
