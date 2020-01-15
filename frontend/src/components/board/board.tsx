import React, { FC } from 'react'
import { connect } from 'react-redux'

import BoardList from './boardlist/boardlist'
import BoardHeader from './boardHeader/boardHeader'

const Board: FC<any> = ({ allBoards }) => {
  return (
    <main className="board">
      <BoardHeader />
      <section className="container">
        <BoardList />
      </section>
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  allBoards: state.board
})

export default connect(mapStateToProps)(Board)
