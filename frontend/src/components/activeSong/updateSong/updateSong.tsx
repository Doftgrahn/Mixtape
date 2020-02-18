import React, { FC, useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { setCurrentSong, mutateCurrentSong } from '../../../logic/activeList/activeListAction'
import { updateListTitle } from '../../../logic/list/listAction'
import { TrackInterface } from '../../../logic/list/constants'

interface UpdateSongInterface {
  activeList: TrackInterface
  sidemenu: boolean
}

const UpdateSong: FC<UpdateSongInterface> = ({ activeList, sidemenu }) => {
  const dispatch = useDispatch()
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [updateTitle, setUpdateTitle] = useState('')

  const setEditToFalse = () => setIsEditingTitle(false)

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        setIsEditingTitle(false)
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [])

  const onEnter = (e: any) => {
    const data = {
      id: activeList._id,
      title: updateTitle || activeList.title
    }
    if (e.key === 'Enter') {
      dispatch(updateListTitle(data))
      dispatch(mutateCurrentSong(updateTitle))
      setEditToFalse()
      dispatch(setCurrentSong(activeList))
    }
  }

  useEffect(() => {
    if (!sidemenu) {
      setUpdateTitle('')
    }
  }, [setUpdateTitle, sidemenu])

  return (
    <div className="updateSong">
      <h1
        className={`${isEditingTitle ? 'hideTitle' : ''}`}
        onClick={() => setIsEditingTitle(!isEditingTitle)}>
        {updateTitle || activeList.title}
      </h1>
      {isEditingTitle ? (
        <input
          placeholder={activeList.title}
          value={updateTitle}
          onChange={e => setUpdateTitle(e.target.value)}
          onKeyPress={e => onEnter(e)}
          onBlur={() => setIsEditingTitle(false)}
          autoFocus
        />
      ) : null}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  activeList: state.activeList.current,
  sidemenu: state.sidemenu.activeTrack
})

export default connect(mapStateToProps)(UpdateSong)
