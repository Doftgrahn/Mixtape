import React, { FC, useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { setCurrentSong, mutateCurrentSong } from '../../../logic/activeList/activeListAction'
import { updateListTitle } from '../../../logic/list/listAction'

const UpdateSong: FC<any> = ({ activeList }) => {
  const { current } = activeList
  const dispatch = useDispatch()

  const [isEditingTitle, setIsEditingTitle] = useState(false)

  const [updateTitle, setUpdateTitle] = useState('')

  const setEditToFalse = () => {
    setIsEditingTitle(false)
  }

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
      id: current._id,
      title: updateTitle || current.title
    }
    if (e.key === 'Enter') {
      dispatch(updateListTitle(data))
      dispatch(mutateCurrentSong(updateTitle))
      setEditToFalse()
      dispatch(setCurrentSong(current))
    }
  }

  return (
    <div>
      <h1
        className={`${isEditingTitle ? 'hideTitle' : null}`}
        onClick={() => setIsEditingTitle(!isEditingTitle)}>
        {updateTitle || current.title}
      </h1>
      {isEditingTitle ? (
        <input
          placeholder={current.title}
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
  activeList: state.activeList
})

export default connect(mapStateToProps)(UpdateSong)
