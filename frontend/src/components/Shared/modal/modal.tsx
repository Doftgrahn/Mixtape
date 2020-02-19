import React, { FC, useEffect, ReactNode } from 'react'
import Close from '../../../assets/cross/close'
import { useDispatch } from 'react-redux'
import { useComponentVisible } from '../../../utils/useComponentVisible/useComponentVisible'

interface ModalInterface {
  children: ReactNode
  modal: boolean
  toggleModal: () => object
}

const Modal: FC<ModalInterface> = ({ children, modal, toggleModal }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const onPressEscape = (event: any) => {
      if (event.keyCode === 27) {
        dispatch(toggleModal())
      }
    }
    window.addEventListener('keydown', onPressEscape)
    return () => {
      window.removeEventListener('keydown', onPressEscape)
    }
  }, [dispatch, toggleModal])

  const exitModal = (): void => {
    dispatch(toggleModal())
    setIsComponentVisible(false)
  }

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  return (
    <div className="modal newBoardModal">
      {isComponentVisible && modal ? (
        <article className="modalContainer" ref={ref}>
          <header className="modalHeader">
            <button onClick={exitModal} tabIndex={0}>
              <Close width={20} height={20} />
            </button>
          </header>
          {children}
        </article>
      ) : (
        dispatch(toggleModal()) && null
      )}
    </div>
  )
}

export default Modal
