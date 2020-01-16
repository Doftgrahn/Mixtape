import React, { FC } from 'react'

import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deletion } from '../../logic/board/boardAction'

const BoardSettings: FC<any> = ({ isVisible, hide, activeBoard }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const deleteBoard = () => {
    dispatch(deletion(activeBoard.activeBoard))
    history.goBack()
  }

  return (
    <section className={`boardSettings ${isVisible ? 'active' : null}`}>
      <header>
        <button onClick={hide}>hide</button>
      </header>
      <article>
        <h1>Invite folks here</h1>
      </article>
      <footer>
        <button onClick={deleteBoard}>delete board (not done yet)</button>
      </footer>
      Board Settings here
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  activeBoard: state.activeBoard
})

export default connect(mapStateToProps)(BoardSettings)
