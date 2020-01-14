import React, { FC, useState, useEffect } from 'react'
import { addToList } from '../../../logic/list/listAction'
import { useDispatch } from 'react-redux'

import { useComponentVisible } from '../../../utils/useComponentVisible/useComponentVisible'

const AddToListModal: FC<any> = ({ isVisible, hideModal }) => {
  const dispatch = useDispatch()

  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        hideModal()
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [hideModal])

  const addSong = (): void => {
    const data = { song, artist }
    if (song && artist) {
      dispatch(addToList(data))
      setSong('')
      hideModal()
      setIsComponentVisible(false)
    }
  }

  const pressEnter = (e: any) => (e.key === 'Enter' ? addSong() : null)

  return (
    <main className="addToListModal">
      {isComponentVisible && isVisible ? (
        <article ref={ref}>
          <header>
            <button onClick={hideModal}>x</button>
          </header>
          <div className="input_wrapper">
            <input
              type="text"
              value={song}
              onChange={e => setSong(e.target.value)}
              onKeyPress={e => pressEnter(e)}
              placeholder="Song..."
              autoFocus
            />
            <input
              type="text"
              value={artist}
              onChange={e => setArtist(e.target.value)}
              placeholder="Artist..."
              onKeyPress={e => pressEnter(e)}
            />
            <button onClick={addSong}>Add song!</button>
          </div>
        </article>
      ) : (
        hideModal()
      )}
    </main>
  )
}

export default AddToListModal
