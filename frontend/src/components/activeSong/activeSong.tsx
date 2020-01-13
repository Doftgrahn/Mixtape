import React, { FC, useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  clearAndHide,
  setCurrentSong,
  mutateCurrentSong
} from '../../logic/activeList/activeListAction'
import { deleteListItem, updateListTitle } from '../../logic/list/listAction'

const ActiveSong: FC<any> = ({ activeList }) => {
  const input = useRef('')
  const [isEditing, setIsEditing] = useState(false)
  const { current } = activeList

  const [updateTitle, setTitle] = useState(current.title || '')
  const dispatch = useDispatch()

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        setIsEditing(false)
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [])

  useEffect(() => {
    return () => {
      dispatch(clearAndHide())
    }
  }, [dispatch])

  const hide = () => dispatch(clearAndHide())

  const deleteSong = (id: any) => {
    dispatch(deleteListItem(id))
    dispatch(clearAndHide())
  }

  const onEnter = (e: any) => {
    if (updateTitle && e.key === 'Enter') {
      dispatch(updateListTitle(current._id, updateTitle))
      dispatch(mutateCurrentSong(updateTitle))
      setIsEditing(false)
      dispatch(setCurrentSong(current))
    }
  }

  return (
    <main className={`activeSong ${current.title ? 'active' : null}`}>
      <header>
        <button onClick={hide}>hide</button>
      </header>
      <article>
        <div>
          <h1
            className={`${isEditing ? 'hideTitle' : null}`}
            onClick={() => setIsEditing(!isEditing)}>
            {updateTitle || current.title}
          </h1>
          {isEditing ? (
            <input
              value={updateTitle}
              onChange={e => setTitle(e.target.value)}
              onKeyPress={e => onEnter(e)}
              autoFocus
            />
          ) : null}
        </div>
      </article>
      <footer>
        <button onClick={() => deleteSong(current._id)}>delete song</button>
      </footer>
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  activeList: state.activeList
})

export default connect(mapStateToProps)(ActiveSong)
