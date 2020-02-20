import React, { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { usersInput } from '../../../logic/users/usersAction'
import { RootStateInterface } from '../../../logic/types'

const SearchUsers: FC<{}> = () => {
  const [isSearching, setIsSearching] = useState(false)
  const dispatch = useDispatch()
  const input = useSelector((state: RootStateInterface) => state.users.input)
  const sidemenu = useSelector((state: RootStateInterface) => state.sidemenu.setlist)
  const isOwner = useSelector((state: RootStateInterface) => state.activeBoard.isOwner)

  const toggle = () => setIsSearching(!isSearching)

  useEffect(() => {
    if (!sidemenu) {
      setIsSearching(false)
      dispatch(usersInput(''))
    }
  }, [dispatch, sidemenu])

  if (!isOwner) return null

  const renderInput = (
    <input
      className="SearchUsers_input"
      type="text"
      value={input}
      onChange={({ target }) => dispatch(usersInput(target.value))}
      placeholder="Invite..."
      autoFocus
    />
  )

  const button = <button onClick={toggle}> + Add Collaborators</button>

  return <>{!isSearching ? button : renderInput} </>
}

export default SearchUsers
