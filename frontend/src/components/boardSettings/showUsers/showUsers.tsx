import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fechGetAllUsers, searchUsers } from '../../../logic/users/usersAction'

const ShowUsers: FC<any> = () => {
  const dispatch = useDispatch()
  const input = useSelector((state: any) => state.users.input)
  const searchResult = useSelector((state: any) => state.users.searchUsers)

  useEffect(() => {
    dispatch(fechGetAllUsers())
  })

  console.log(searchResult)
  const renderUsers = searchResult.map((user: any) => (
    <div key={user._id}>
      <h2>{user.name}</h2>
    </div>
  ))

  useEffect(() => {
    dispatch(searchUsers(input))
  }, [input, dispatch])
  return (
    <ul>
      <h1>he</h1>
      {renderUsers}
    </ul>
  )
}

export default ShowUsers
