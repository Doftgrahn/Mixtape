import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { setActiveBoard as activeBoard } from '../../../logic/activeBoard/activeBoardAction'
import { BoardInterface } from '../../../logic/types'

import NewBoard from '../newboard/newBoard'
import Account from '../../../assets/account/account'
import Spinner from '../../shared/spinner/spinner'

const BoardList: FC<any> = ({ setlist }) => {
  const { boards, loading } = setlist
  const dispatch = useDispatch()

  const setActiveBoard = (board: any): any => dispatch(activeBoard(board))

  const renderMyBoards = boards.map((board: BoardInterface): any => (
    <CSSTransition key={board._id} timeout={500} classNames="item">
      <li title={`Setlist: ${board.title}`}>
        <Link tabIndex={0} onClick={() => setActiveBoard(board)} to={`/dashboard/${board.title}`}>
          <p>
            <Account height={20} width={20} />{' '}
            {board.collaborators.length ? board.collaborators.length : 'Only you'}
          </p>
          <h3>{board.title}</h3>
        </Link>
      </li>
    </CSSTransition>
  ))

  return (
    <ul className="boardlist">
      {loading && <Spinner />}
      <NewBoard />
      <TransitionGroup component={null}>{renderMyBoards}</TransitionGroup>
    </ul>
  )
}

const mapStateToProps = (state: any) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(BoardList)
