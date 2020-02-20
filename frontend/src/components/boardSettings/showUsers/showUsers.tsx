import React, { FC, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import { fechGetAllUsers, searchUsers, usersInput } from '../../../logic/users/usersAction'

import { inviteCollaborator } from '../../../logic/setlist/setlistAction'
import { RootStateInterface } from '../../../logic/types'
import { UserInterface } from '../../../logic/auth/contants'

interface ShowUsersInterface {
  input: string
  searchResult: UserInterface[]
  sidemenu: boolean
  currentCollaborators: UserInterface[]
}

const ShowUsers: FC<ShowUsersInterface> = ({
  input,
  searchResult,
  sidemenu,
  currentCollaborators
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (sidemenu) {
      dispatch(fechGetAllUsers())
    }
  }, [dispatch, sidemenu])

  const invite = (id: string) => {
    dispatch(inviteCollaborator(id))
    dispatch(usersInput(''))
  }

  const renderUsers = searchResult.map((user: any) => {
    const find = currentCollaborators
      .map((user: UserInterface) => user._id)
      .find((x: string) => x === user._id)
    return (
      <li className="UsersList_single" key={user._id}>
        <span>{user.name}</span>
        {find ? (
          <span>Already Invited</span>
        ) : (
          <button className="addCollaborator" onClick={() => invite(user._id)}>
            +
          </button>
        )}
      </li>
    )
  })

  useEffect(() => {
    dispatch(searchUsers(input))
  }, [input, dispatch])

  return <ul className="UsersList">{renderUsers}</ul>
}

const mapStateToProps = (state: RootStateInterface) => ({
  input: state.users.input,
  searchResult: state.users.searchUsers,
  sidemenu: state.sidemenu.setlist,
  currentCollaborators: state.users.invitedUsers
})

export default connect(mapStateToProps)(ShowUsers)
