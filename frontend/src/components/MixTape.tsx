import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { addBoard } from '../logic/board/boardAction'

import { connect } from 'react-redux'
const MixTape: FC<any> = ({ auth }) => {
  const { id } = auth.user
  const dispatch = useDispatch()

  const createBoard = () => dispatch(addBoard(id))

  return (
    <main>
      <h1>hej {auth.user.name}</h1>
      Skapa in låtlista!
      <button onClick={createBoard}>+</button>
    </main>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(MixTape)
