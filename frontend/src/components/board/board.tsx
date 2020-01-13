import React, { FC } from 'react'
import { connect } from 'react-redux'

import BoardList from './boardlist/boardlist'
import NewBoard from './newboard/newBoard'

const Board: FC<any> = () => {
  return (
    <main className="board">
      <NewBoard />
      <BoardList />
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  allBoards: state.board
})

export default connect(mapStateToProps)(Board)
