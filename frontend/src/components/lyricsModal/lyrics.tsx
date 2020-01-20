import React, { FC } from 'react'
import { useDispatch, connect } from 'react-redux'

import LyricInput from './lyricInput/lyricInput'
import LyricsList from './lyricList/lyricsList'
import Close from '../../assets/cross/close'
import { useComponentVisible } from '../../utils/useComponentVisible/useComponentVisible'
import { closeLyricModal } from '../../logic/modal/modalAction'

const Lyrics: FC<any> = ({ modal }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)
  const dispatch = useDispatch()

  const exitModal = () => {
    dispatch(closeLyricModal())
    setIsComponentVisible(false)
  }

  return (
    <div className="modal" role="dialog">
      {isComponentVisible && modal ? (
        <div ref={ref} className="modalContainer">
          <header className="modalHeader">
            <button onClick={exitModal}>
              <Close width={20} height={20} />
            </button>
          </header>
          <article>
            <LyricInput />
            <LyricsList />
          </article>
        </div>
      ) : (
        dispatch(closeLyricModal()) && null
      )}
    </div>
  )
}

const mapStatetoProp = (state: any) => ({
  modal: state.modal.lyricModal
})

export default connect(mapStatetoProp)(Lyrics)
