import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { usersInput } from '../../../logic/users/usersAction'

const SearchUsers: FC<{}> = () => {
  const dispatch = useDispatch()
  const input = useSelector((state: any) => state.users.input)

  return (
    <input
      type="text"
      value={input}
      onChange={({ target }) => dispatch(usersInput(target.value))}
      placeholder="Invite..."
    />
  )
}

export default SearchUsers
