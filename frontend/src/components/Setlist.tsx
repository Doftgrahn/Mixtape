import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import BoardList from './board/boardlist/boardlist'
import BoardHeader from './board/boardHeader/boardHeader'

import { AppModel, clearSetlist } from '../logic/board/boardAction'

const Setlist: FC<any> = ({ allBoards }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AppModel())
    return () => {
      dispatch(clearSetlist())
    }
  }, [dispatch])
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

export default connect(mapStateToProps)(Setlist)