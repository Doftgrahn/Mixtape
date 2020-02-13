import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import BoardList from './setlist/boardlist/boardlist'
import Collaborators from './setlist/collaborators/collaborators'
import SetlistModal from './setlistModal/setlistModal'

import { AppModel } from '../logic/setlist/setlistAction'

const Setlist: FC<any> = ({ modal, collaborators }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AppModel())
  }, [dispatch])

  const setListModal = modal ? <SetlistModal /> : null

  return (
    <main className="board">
      <section className="container">
        <h1>My Setlists</h1>
        <BoardList />

        {collaborators.length > 0 ? (
          <>
            <h2>Collaborators</h2>
            <Collaborators />
          </>
        ) : null}
      </section>
      {/* Modals */}
      {setListModal}
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  modal: state.modal.setlistModal,
  collaborators: state.setlist.collaborators
})

export default connect(mapStateToProps)(Setlist)
