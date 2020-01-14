import React, { FC, useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { setCurrentSong, mutateCurrentSong } from '../../../logic/activeList/activeListAction'
import { updateListTitle } from '../../../logic/list/listAction'

const UpdateSong: FC<any> = ({ activeList }) => {
  const { current } = activeList
  const dispatch = useDispatch()

  const [isEditingArtist, setIsEditingArtist] = useState(false)
  const [isEditingSong, setIsEditingSong] = useState(false)

  const [updateArtist, setArtist] = useState('')
  const [updateSong, setUpdateSong] = useState('')

  const setEditToFalse = () => {
    setIsEditingSong(false)
    setIsEditingArtist(false)
  }

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        setIsEditingArtist(false)
        setIsEditingSong(false)
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
      artist: updateArtist || current.artist,
      song: updateSong || current.song
    }
    if (e.key === 'Enter') {
      dispatch(updateListTitle(data))
      dispatch(mutateCurrentSong(updateArtist))
      setEditToFalse()
      dispatch(setCurrentSong(current))
    }
  }

  return (
    <fieldset>
      <div>
        <h1
          className={`${isEditingArtist ? 'hideTitle' : null}`}
          onClick={() => setIsEditingArtist(!isEditingArtist)}>
          Artist: {updateArtist || current.artist}
        </h1>
        {isEditingArtist ? (
          <input
            value={updateArtist}
            onChange={e => setArtist(e.target.value)}
            onKeyPress={e => onEnter(e)}
            onBlur={() => setIsEditingArtist(false)}
            autoFocus
          />
        ) : null}
      </div>

      <div>
        <h1
          className={`${isEditingSong ? 'hideTitle' : null}`}
          onClick={() => setIsEditingSong(!isEditingSong)}>
          Song: {updateSong || current.song}
        </h1>
        {isEditingSong ? (
          <input
            value={updateSong}
            onChange={e => setUpdateSong(e.target.value)}
            onKeyPress={e => onEnter(e)}
            onBlur={() => setIsEditingSong(false)}
            autoFocus
          />
        ) : null}
      </div>
    </fieldset>
  )
}

const mapStateToProps = (state: any) => ({
  activeList: state.activeList
})

export default connect(mapStateToProps)(UpdateSong)
