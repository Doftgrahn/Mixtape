import React, { FC } from 'react'

import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deletion, leaveSetlist } from '../../logic/setlist/setlistAction'

import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import SearchUsers from './searchUsers/searchUsers'
import ShowUsers from './showUsers/showUsers'

const BoardSettings: FC<any> = ({ isVisible, hide, activeBoard }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const deleteBoard = () => {
    dispatch(deletion(activeBoard._id))
    history.goBack()
  }

  const leaveSetListIfNotOwner = (id: string) => {
    history.goBack()
    dispatch(leaveSetlist(id))
  }

  return (
    <section className={`boardSettings sidebar ${isVisible ? 'active' : null}`}>
      <header>
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <SearchUsers />
        <ShowUsers />
      </article>
      <footer>
        <button className="sideMenu_goBack" onClick={() => history.goBack()}>
          go Back
        </button>
        {activeBoard.isOwner ? (
          <button className="sideMenu_delete" onClick={deleteBoard}>
            delete Setlist
          </button>
        ) : null}
        {!activeBoard.isOwner ? (
          <button
            className="sideMenu_delete"
            onClick={() => leaveSetListIfNotOwner(activeBoard._id)}>
            Leave Setlist
          </button>
        ) : null}
      </footer>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  activeBoard: state.activeBoard.activeBoard
})

export default connect(mapStateToProps)(BoardSettings)
