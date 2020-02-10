import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { getInvitedUsers } from '../../../logic/users/usersAction'

const InvitedCollaborators: FC<any> = ({ invitedUsers }) => {
  const dispatch = useDispatch()

  const renderCurrentCollaborators = invitedUsers.map((user: any) => (
    <li key={user._id}>{user.name}</li>
  ))

  useEffect(() => {
    dispatch(getInvitedUsers())
  }, [dispatch])
  return <ul>{renderCurrentCollaborators}</ul>
}

const mapStateToProps = (state: any) => ({
  invitedUsers: state.users.invitedUsers
})

export default connect(mapStateToProps)(InvitedCollaborators)
