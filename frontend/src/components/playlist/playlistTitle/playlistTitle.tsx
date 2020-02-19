import React, { FC, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history'
import { mutateSetlist } from '../../../logic/setlist/setlistAction'
import Edit from '../../../assets/edit/edit'
import { toggleEditSetlist } from '../../../logic/sidemenu/sidemenuAction'
import { BoardInterface } from '../../../logic/types'

interface PlaylistTitleInterface {
  activeSetlist: BoardInterface
}

const PlaylistTitle: FC<PlaylistTitleInterface> = ({ activeSetlist }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const { title, user, description } = activeSetlist
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

  const setToEdit = () => (activeSetlist.isOwner ? setIsEditing(true) : null)

  const setListTitle = !isEditing ? (
    <button title="change title" onClick={setToEdit}>
      <h1>{title}</h1>
    </button>
  ) : (
    input
  )

  return (
    <div className="title">
      <div className="title_info">
        <div className="title_container">
          {setListTitle}
          <h3 className="userName">by {user}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="editPlaylist_btn">
        <button onClick={() => dispatch(toggleEditSetlist())}>
          <Edit height={20} width={20} />
        </button>
      </div>
    </div>
  )
}

const mapStatetoProp = (state: any) => ({
  activeSetlist: state.activeBoard
})

export default connect(mapStatetoProp)(PlaylistTitle)
