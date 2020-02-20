import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { unInviteCollaborator } from '../../../logic/setlist/setlistAction'
import { UserInterface } from '../../../logic/auth/contants'
import { RootStateInterface } from '../../../logic/types'

interface InvitedCollaborators {
  invitedUsers: UserInterface[]
  isOwner: boolean
}

const InvitedCollaborators: FC<InvitedCollaborators> = ({ invitedUsers, isOwner }) => {
  const dispatch = useDispatch()

  const renderCurrentCollaborators = invitedUsers.map((user: any) => (
    <CSSTransition key={user._id} timeout={200} classNames="item">
      <li className="invitedCollaborators" key={user._id}>
        <span>{user.name}</span>
        {isOwner ? (
          <button
            className="addCollaborator"
            onClick={() => dispatch(unInviteCollaborator(user._id))}>
            Remove
          </button>
        ) : null}
      </li>
    </CSSTransition>
  ))

  return (
    <ul>
      <TransitionGroup component={null}>{renderCurrentCollaborators}</TransitionGroup>
    </ul>
  )
}

const mapStateToProps = (state: RootStateInterface) => ({
  invitedUsers: state.users.invitedUsers,
  isOwner: state.activeBoard.isOwner
})

export default connect(mapStateToProps)(InvitedCollaborators)
