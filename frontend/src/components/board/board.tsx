import React, { FC } from 'react'
import { connect } from 'react-redux'

import BoardList from './boardlist/boardlist'
import NewBoard from './newboard/newBoard'
import NoBoard from './noboard/noboard'
import BoardHeader from './boardHeader/boardHeader'

const Board: FC<any> = ({ allBoards }) => {
  return (
    <main className="board">
      <BoardHeader />
      <NewBoard />
      <BoardList />
      {!allBoards.boards.length ? <NoBoard /> : null}
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  allBoards: state.board
})

export default connect(mapStateToProps)(Board)
