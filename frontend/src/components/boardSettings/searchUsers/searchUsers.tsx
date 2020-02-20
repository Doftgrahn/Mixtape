import React, { FC, useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'

import { usersInput } from '../../../logic/users/usersAction'
import { RootStateInterface } from '../../../logic/types'

interface SearchUserInterface {
  input: string
  sidemenu: boolean
  isOwner: boolean
}

const SearchUsers: FC<SearchUserInterface> = ({ input, sidemenu, isOwner }) => {
  const [isSearching, setIsSearching] = useState(false)
  const dispatch = useDispatch()

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

const mapStateToProps = (state: RootStateInterface) => ({
  input: state.users.input,
  sidemenu: state.sidemenu.setlist,
  isOwner: state.activeBoard.isOwner
})

export default connect(mapStateToProps)(SearchUsers)
