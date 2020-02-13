import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fechGetAllUsers, searchUsers, usersInput } from '../../../logic/users/usersAction'

import { inviteCollaborator } from '../../../logic/setlist/setlistAction'

const ShowUsers: FC<any> = () => {
  const dispatch = useDispatch()
  const input = useSelector((state: any) => state.users.input)
  const searchResult = useSelector((state: any) => state.users.searchUsers)
  const currentCollaborators = useSelector((state: any) => state.users.invitedUsers).map(
    (user: any) => user._id
  )

  useEffect(() => {
    dispatch(fechGetAllUsers())
  }, [dispatch])

  const invite = (id: string) => {
    dispatch(inviteCollaborator(id))
    dispatch(usersInput(''))
  }

  const renderUsers = searchResult.map((user: any) => {
    const find = currentCollaborators.find((x: string) => x === user._id)
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

export default ShowUsers
