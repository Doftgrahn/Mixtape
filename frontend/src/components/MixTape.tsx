import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addBoard, AppModel } from '../logic/board/boardAction'
import { connect } from 'react-redux'
import { MixtapeProps } from '../types'

const MixTape: FC<MixtapeProps> = ({ auth, boards }) => {
  const { id } = auth.user
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AppModel(id))
  }, [dispatch, id])

  const createBoard = () => dispatch(addBoard(id))

  console.log(boards)

  return (
    <main>
      <h1>hej {auth.user.name}</h1>
      Skapa in låtlista!
      <button onClick={createBoard}>+</button>
    </main>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth,
  boards: state.board
})

export default connect(mapStateToProps)(MixTape)
