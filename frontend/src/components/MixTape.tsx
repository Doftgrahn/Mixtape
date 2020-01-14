import React, { FC } from 'react'
import { connect } from 'react-redux'

import Board from './board/board'

const MixTape: FC<any> = ({ auth }) => {
  return (
    <main>
      <Board />
    </main>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(MixTape)
