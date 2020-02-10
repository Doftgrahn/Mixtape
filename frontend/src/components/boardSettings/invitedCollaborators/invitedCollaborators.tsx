import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { getInvitedUsers } from '../../../logic/users/usersAction'
import { unInviteCollaborator } from '../../../logic/setlist/setlistAction'

const InvitedCollaborators: FC<any> = ({ invitedUsers, isOwner }) => {
  const dispatch = useDispatch()

  const renderCurrentCollaborators = invitedUsers.map((user: any) => (
    <li className="invitedCollaborators" key={user._id}>
      <p>{user.name}</p>
      {isOwner ? (
        <button
          className="addCollaborator"
          onClick={() => dispatch(unInviteCollaborator(user._id))}>
          Remove
        </button>
      ) : null}
    </li>
  ))

  useEffect(() => {
    dispatch(getInvitedUsers())
  }, [dispatch])
  return <ul>{renderCurrentCollaborators}</ul>
}

const mapStateToProps = (state: any) => ({
  invitedUsers: state.users.invitedUsers,
  isOwner: state.activeBoard.activeBoard.isOwner
})

export default connect(mapStateToProps)(InvitedCollaborators)
