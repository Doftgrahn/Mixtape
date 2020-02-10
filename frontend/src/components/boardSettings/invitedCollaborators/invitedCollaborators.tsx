import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { getInvitedUsers } from '../../../logic/users/usersAction'
import { unInviteCollaborator } from '../../../logic/setlist/setlistAction'

const InvitedCollaborators: FC<any> = ({ invitedUsers, isOwner }) => {
  const dispatch = useDispatch()

  const renderCurrentCollaborators = invitedUsers.map((user: any) => (
    <li key={user._id}>
      <h2>{user.name}</h2>
      {isOwner ? (
        <button onClick={() => dispatch(unInviteCollaborator(user._id))}>UnInvite</button>
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
