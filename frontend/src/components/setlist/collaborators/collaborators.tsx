import React, { FC } from 'react'
import { connect } from 'react-redux'

import SetlistItem from '../setlistItem/setlistItem'
import { BoardStateInterface } from '../../../logic/types'
import { BoardInterface } from '../../../types/propTypes'

interface CollaboratorsInterface {
  setlist: BoardStateInterface
}

const Collaborators: FC<CollaboratorsInterface> = ({ setlist }) => {
  const renderMyBoards = setlist.collaborators.map((setlist: BoardInterface) => (
    <SetlistItem key={setlist._id} board={setlist} />
  ))
  const list = setlist.collaborators.length && <ul className="boardlist">{renderMyBoards}</ul>
  return <>{list}</>
}

const mapStateToProps = (state: any) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(Collaborators)
