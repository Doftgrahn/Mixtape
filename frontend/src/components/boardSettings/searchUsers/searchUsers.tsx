import React, { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { usersInput } from '../../../logic/users/usersAction'

const SearchUsers: FC<{}> = () => {
  const [isSearching, setIsSearching] = useState(false)
  const dispatch = useDispatch()
  const input = useSelector((state: any) => state.users.input)
  const sidemenu = useSelector((state: any) => state.sidemenu.setlist)

  const toggle = () => setIsSearching(!isSearching)

  useEffect(() => {
    if (!sidemenu) {
      setIsSearching(false)
      dispatch(usersInput(''))
    }
  }, [dispatch, sidemenu])

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

  const button = (
    <button className="addCollaborator_btn" onClick={toggle}>
      Add Collaborators
    </button>
  )

  return <>{!isSearching ? button : renderInput} </>
}

export default SearchUsers
