import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addBoard, AppModel } from '../logic/board/boardAction'
import { connect } from 'react-redux'
import { BoardInterface } from '../logic/types'
import { Link } from 'react-router-dom'

const MixTape: FC<any> = ({ auth, allBoards }) => {
  const { id } = auth.user
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AppModel(id))
  }, [dispatch, id])

  const createBoard = () => dispatch(addBoard(id))

  const renderMyBoards = allBoards.boards.map((board: BoardInterface): any => (
    <Link to={`/${board.userId}/${board._id}`} key={board._id}>
      {board.title}
    </Link>
  ))

  return (
    <main>
      <h1>hej {auth.user.name}</h1>
      Skapa en låtlista!
      <hr />
      <button onClick={createBoard}>+</button>
      <hr />
      {renderMyBoards}
    </main>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth,
  allBoards: state.board
})

export default connect(mapStateToProps)(MixTape)
