import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import BoardList from './setlist/boardlist/boardlist'
import Collaborators from './setlist/collaborators/collaborators'
import BoardHeader from './setlist/boardHeader/boardHeader'
import SetlistModal from './setlistModal/setlistModal'

import { AppModel } from '../logic/setlist/setlistAction'

const Setlist: FC<any> = ({ modal, collaborators }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AppModel())
  }, [dispatch])

  const setListModal = modal ? <SetlistModal /> : null
  const invited = collaborators.length ? <h1>Collaborators</h1> : null

  return (
    <main className="board">
      <BoardHeader />
      <section className="container">
        <h1>My Setlists</h1>
        <BoardList />
        {invited}
        <Collaborators />
      </section>
      {setListModal}
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  modal: state.modal.setlistModal,
  collaborators: state.setlist.collaborators
})

export default connect(mapStateToProps)(Setlist)
