import React, { FC } from 'react'

import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deletion } from '../../logic/setlist/setlistAction'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'

const BoardSettings: FC<any> = ({ isVisible, hide, activeBoard }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const deleteBoard = () => {
    dispatch(deletion(activeBoard.activeBoard))
    history.goBack()
  }

  return (
    <section className={`boardSettings sidebar ${isVisible ? 'active' : null}`}>
      <header>
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <h1>Invite folks here</h1>
      </article>
      <footer>
        <button className="sideMenu_goBack" onClick={() => history.goBack()}>
          go Back
        </button>
        <button className="sideMenu_delete" onClick={deleteBoard}>
          delete board
        </button>
      </footer>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  activeBoard: state.activeBoard
})

export default connect(mapStateToProps)(BoardSettings)
