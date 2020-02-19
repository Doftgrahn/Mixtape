import React, { FC } from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import NewBoard from '../newboard/newBoard'
import SetlistItem from '../setlistItem/setlistItem'
import Spinner from '../../shared/spinner/spinner'
import { BoardStateInterface } from '../../../logic/types'

interface SetListItems {
  setlist: BoardStateInterface
}

const BoardList: FC<SetListItems> = ({ setlist }) => {
  const { boards, loading } = setlist

  const renderMyBoards = boards.map((board: any) => (
    <CSSTransition key={board._id} timeout={500} classNames="item">
      <SetlistItem board={board} />
    </CSSTransition>
  ))

  return (
    <ul className="boardlist">
      {loading && !boards.length && <Spinner />}
      <NewBoard />
      <TransitionGroup component={null}>{renderMyBoards}</TransitionGroup>
    </ul>
  )
}

const mapStateToProps = (state: any) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(BoardList)
