import React, { FC } from 'react'
import { connect } from 'react-redux'

import SetlistItem from '../setlistItem/setlistItem'
import { BoardInterface } from '../../../logic/types'

interface CollaboratorsInterface {
  setlist: BoardInterface
}

const Collaborators: FC<CollaboratorsInterface> = ({ setlist }) => {
  const renderMyBoards = setlist.collaborators.map((setlist: any) => (
    <SetlistItem key={setlist._id} board={setlist} />
  ))
  const list = setlist.collaborators.length && <ul className="boardlist">{renderMyBoards}</ul>
  return <>{list}</>
}

const mapStateToProps = (state: any) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(Collaborators)
