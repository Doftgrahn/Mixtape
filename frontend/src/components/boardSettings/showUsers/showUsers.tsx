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
    <div key={user._id}>
      <h2>{user.name}</h2>
      <button onClick={() => dispatch(inviteCollaborator(user._id))}>+ add to setlist</button>
    </div>
  ))

  useEffect(() => {
    dispatch(searchUsers(input))
  }, [input, dispatch])

  return <ul>{renderUsers}</ul>
}

export default ShowUsers
