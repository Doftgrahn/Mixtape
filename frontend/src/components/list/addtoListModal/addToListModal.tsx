import React, { FC, useState, useEffect } from 'react'
import { addToList } from '../../../logic/list/listAction'
import { useDispatch } from 'react-redux'

const AddToListModal: FC<any> = ({ hideModal }) => {
  const [song, setSong] = useState('')
  const dispatch = useDispatch()

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
    dispatch(addToList(song))
    setSong('')
    hideModal()
  }

  const pressEnter = (e: any) => (e.key === 'Enter' ? addSong() : null)

  return (
    <main className="addToListModal">
      <article>
        <header>
          <button onClick={hideModal}>x</button>
        </header>
        <div className="input_wrapper">
          <input
            type="text"
            value={song}
            onChange={e => setSong(e.target.value)}
            onKeyPress={e => pressEnter(e)}
            placeholder="Add song..."
          />
          <button onClick={addSong}>Add song!</button>
        </div>
      </article>
    </main>
  )
}

export default AddToListModal
