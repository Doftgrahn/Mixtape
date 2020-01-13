import React, { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  clearAndHide,
  setCurrentSong,
  mutateCurrentSong
} from '../../logic/activeList/activeListAction'
import { deleteListItem, updateListTitle } from '../../logic/list/listAction'

const ActiveSong: FC<any> = ({ activeList }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { current } = activeList

  const [updateArtist, setArtist] = useState('')
  const [updateSong, setUpdateSong] = useState('')

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
    const data = {
      id: current._id,
      artist: updateArtist,
      song: updateSong
    }
    if (updateArtist && e.key === 'Enter') {
      dispatch(updateListTitle(data))
      dispatch(mutateCurrentSong(updateArtist))
      setIsEditing(false)
      dispatch(setCurrentSong(current))
    }
  }

  return (
    <main className={`activeSong ${current.artist ? 'active' : null}`}>
      <header>
        <button onClick={hide}>hide</button>
      </header>
      <article>
        <div>
          <h1
            className={`${isEditing ? 'hideTitle' : null}`}
            onClick={() => setIsEditing(!isEditing)}>
            {updateArtist || current.artist}
          </h1>
          {isEditing ? (
            <input
              defaultValue="default"
              value={updateArtist}
              onChange={e => setArtist(e.target.value)}
              onKeyPress={e => onEnter(e)}
              autoFocus
            />
          ) : null}
        </div>
        <div>
          <h1
            className={`${isEditing ? 'hideTitle' : null}`}
            onClick={() => setIsEditing(!isEditing)}>
            {updateSong || current.song}
          </h1>
          {isEditing ? (
            <input
              defaultValue="default"
              value={updateSong}
              onChange={e => setUpdateSong(e.target.value)}
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
