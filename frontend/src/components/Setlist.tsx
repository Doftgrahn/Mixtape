import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import BoardList from './setlist/boardlist/boardlist'
import BoardHeader from './setlist/boardHeader/boardHeader'
import SetlistModal from './setlistModal/setlistModal'

import { AppModel, clearSetlist } from '../logic/setlist/setlistAction'

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
        <h1>My Setlists</h1>
        <BoardList />
        <h1>Invited to</h1>
      </section>
      {setListModal}
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  modal: state.modal.setlistModal
})

export default connect(mapStateToProps)(Setlist)
