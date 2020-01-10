import React, { FC } from 'react'
import { connect } from 'react-redux'

import Board from './board/board'
import NewBoard from './board/newBoard'

const MixTape: FC<any> = ({ auth }) => {
  return (
    <main>
      <h1>hej {auth.user.name}</h1>
      Skapa en låtlista!
      <hr />
      <NewBoard />
      <Board />
    </main>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(MixTape)
