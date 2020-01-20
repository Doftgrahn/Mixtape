import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import BoardList from './setlist/boardlist/boardlist'
import BoardHeader from './setlist/boardHeader/boardHeader'

import { AppModel, clearSetlist } from '../logic/setlist/setlistAction'

import SetlistModal from './setlistModal/setlistModal'

const Setlist: FC<any> = ({ modal }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AppModel())
    return () => {
      dispatch(clearSetlist())
    }
  }, [dispatch])

  const setListModal = modal ? <SetlistModal /> : null

  return (
    <main className="board">
      <BoardHeader />
      <section className="container">
        <BoardList />
      </section>
      {setListModal}
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  allBoards: state.board,
  modal: state.modal.setlistModal
})

export default connect(mapStateToProps)(Setlist)
