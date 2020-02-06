import React, { FC, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history'

import { mutateSetlist } from '../../../logic/setlist/setlistAction'

interface PlaylistTitleInterface {
  activeSetlist: object | any
}

const PlaylistTitle: FC<PlaylistTitleInterface> = ({ activeSetlist }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const { title, user } = activeSetlist
  const history = createBrowserHistory()

  const changeUrl = () => history.replace(`/dashboard/${value}`)

  const send = () => (value ? dispatch(mutateSetlist(value)) : false)

  const onBlur = () => {
    setIsEditing(false)
    changeUrl()
    send()
  }

  const pressEnter = (e: any) => {
    if (e.key === 'Enter') {
      setIsEditing(false)
      send()
      changeUrl()
    }
  }

  const input = isEditing ? (
    <input
      className="mutate_setlist_title"
      tabIndex={0}
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={onBlur}
      placeholder={title}
      onKeyPress={pressEnter}
      autoFocus
    />
  ) : null

  const setListTitle = !isEditing ? <h1 onClick={() => setIsEditing(true)}>{title}</h1> : null

  return (
    <div className="title">
      {setListTitle}
      {input}
      <h1>{user}</h1>
    </div>
  )
}

const mapStatetoProp = (state: any) => ({
  activeSetlist: state.activeBoard.activeBoard
})

export default connect(mapStatetoProp)(PlaylistTitle)
