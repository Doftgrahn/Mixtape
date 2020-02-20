import React, { FC } from 'react'
import { connect } from 'react-redux'
import SetlistItem from '../setlistItem/setlistItem'
import { RootStateInterface, BoardInterface } from '../../../logic/types'
import { SetlistStateInterface } from '../../../logic/setlist/constants'

interface CollaboratorsInterface {
  setlist: SetlistStateInterface
}

const Collaborators: FC<CollaboratorsInterface> = ({ setlist }) => {
  const renderMyBoards = setlist.collaborators.map((setlist: BoardInterface) => (
    <SetlistItem key={setlist._id} board={setlist} />
  ))
  const list = setlist.collaborators.length && <ul className="boardlist">{renderMyBoards}</ul>
  return <>{list}</>
}

const mapStateToProps = (state: RootStateInterface) => ({
  setlist: state.setlist
})

export default connect(mapStateToProps)(Collaborators)
