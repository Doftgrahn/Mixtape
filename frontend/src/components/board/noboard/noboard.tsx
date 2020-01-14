import React, { FC } from 'react'
import { connect } from 'react-redux'

import Newboard from '../newboard/newBoard'

const NoBoard: FC<any> = ({ allBoards }) => {
  return (
    <main>
      <h1>Looks like you don't have any setlists! why dont you create one!</h1>
      <Newboard />
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  allBoards: state.board
})

export default connect(mapStateToProps)(NoBoard)
