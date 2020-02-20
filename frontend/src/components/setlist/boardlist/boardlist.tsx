import React, { FC } from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import NewBoard from '../newboard/newBoard'
import SetlistItem from '../setlistItem/setlistItem'
import Spinner from '../../shared/spinner/spinner'
import { RootStateInterface, BoardInterface } from '../../../logic/types'
import { SetlistStateInterface } from '../../../logic/setlist/constants'

interface SetListItems {
  setlist: SetlistStateInterface
}

const BoardList: FC<SetListItems> = ({ setlist }) => {
  const { boards, loading } = setlist

  const renderMyBoards = boards.map((board: BoardInterface) => (
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

const mapStateToProps = (state: RootStateInterface) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(BoardList)
