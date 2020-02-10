import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fechGetAllUsers, searchUsers } from '../../../logic/users/usersAction'
import { inviteCollaborator } from '../../../logic/setlist/setlistAction'

const ShowUsers: FC<any> = () => {
  const dispatch = useDispatch()
  const input = useSelector((state: any) => state.users.input)
  const searchResult = useSelector((state: any) => state.users.searchUsers)

  useEffect(() => {
    dispatch(fechGetAllUsers())
  })

  const renderUsers = searchResult.map((user: any) => (
    <li className="UsersList_single" key={user._id}>
      <h3>{user.name}</h3>
      <button className="addCollaborator" onClick={() => dispatch(inviteCollaborator(user._id))}>
        +
      </button>
    </li>
  ))

  useEffect(() => {
    dispatch(searchUsers(input))
  }, [input, dispatch])

  return <ul className="UsersList">{renderUsers}</ul>
}

export default ShowUsers
