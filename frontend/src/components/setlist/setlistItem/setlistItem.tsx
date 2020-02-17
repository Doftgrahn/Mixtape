import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { setActiveBoard as activeBoard } from '../../../logic/activeBoard/activeBoardAction'

import Account from '../../../assets/account/account'

const SetlistItem: FC<any> = ({ board }) => {
  const dispatch = useDispatch()
  const setActiveBoard = (board: object) => dispatch(activeBoard(board))

  const howmanyIfowner = board.collaborators.length ? board.collaborators.length : 'Only you'

  const showOwnerIfnotOwner = !board.isOwner ? board.user : ''

  return (
    <CSSTransition key={board._id} timeout={500} classNames="item">
      <li title={`Setlist: ${board.title}`}>
        <Link tabIndex={0} onClick={() => setActiveBoard(board)} to={`/dashboard/${board.title}`}>
          <p>
            <Account height={20} width={20} />
            {showOwnerIfnotOwner}
            {board.isOwner ? howmanyIfowner : ''}
          </p>
          <h3>{board.title}</h3>
        </Link>
      </li>
    </CSSTransition>
  )
}
export default SetlistItem
