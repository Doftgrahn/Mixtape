import React, { FC } from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import NewBoard from '../newboard/newBoard'
import SetlistItem from '../setlistItem/setlistItem'
import Spinner from '../../shared/spinner/spinner'

const BoardList: FC<any> = ({ setlist }) => {
  const { boards, loading } = setlist

  const renderMyBoards = boards.map((board: any) => (
    <CSSTransition key={board._id} timeout={400} classNames="item">
      <SetlistItem key={board._id} board={board} />
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
