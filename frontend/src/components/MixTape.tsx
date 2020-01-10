import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { addBoard } from '../logic/board/boardAction'
import { connect } from 'react-redux'

import Board from './board/board'

const MixTape: FC<any> = ({ auth, allBoards }) => {
  const { id } = auth.user
  const dispatch = useDispatch()

  const createBoard = () => dispatch(addBoard(id))

  return (
    <main>
      <h1>hej {auth.user.name}</h1>
      Skapa en låtlista!
      <hr />
      <Board />
      <button onClick={createBoard}>+</button>
    </main>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(MixTape)
