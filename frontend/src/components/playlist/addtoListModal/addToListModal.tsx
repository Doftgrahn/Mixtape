import React, { FC, useState, useEffect } from 'react'
import { addToList } from '../../../logic/list/listAction'
import { useDispatch } from 'react-redux'

import { useComponentVisible } from '../../../utils/useComponentVisible/useComponentVisible'

import Close from '../../../assets/cross/close'

const AddToListModal: FC<any> = ({ isVisible, hideModal }) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
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
    if (title) {
      dispatch(addToList(title))
      setTitle('')
      hideModal()
      setIsComponentVisible(false)
    }
  }

  const pressEnter = (e: any) => (e.key === 'Enter' ? addSong() : null)

  return (
    <main className="modal">
      {isComponentVisible && isVisible ? (
        <article ref={ref} className="modalContainer">
          <header className="modalHeader">
            <button onClick={hideModal}>
              <Close width={20} height={20} />
            </button>
          </header>
          <div className="input_wrapper">
            <h1>Add a Song!</h1>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyPress={e => pressEnter(e)}
              placeholder="Song..."
              autoFocus
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
