import React, { FC } from 'react'
import { connect } from 'react-redux'

const Board: FC = () => {
  return <main>Main</main>
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(Board)
