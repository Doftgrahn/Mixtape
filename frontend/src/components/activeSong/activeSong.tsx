import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearAndHide } from '../../logic/activeList/activeListAction'
import { deleteListItem } from '../../logic/list/listAction'

import UpdateSong from './updateSong/updateSong'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'

import Trash from '../../assets/trash/trash'

const ActiveSong: FC<any> = ({ activeSong }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(clearAndHide())
    }
  }, [dispatch])

  const hide = () => dispatch(clearAndHide())

  const deleteSong = (id: any) => {
    dispatch(deleteListItem(id))
    dispatch(clearAndHide())
  }

  return (
    <article className={`activeSong sidebar ${activeSong._id ? 'active' : null}`}>
      <header className="sidebarHeader">
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <UpdateSong />
        <div className="socialBtns">
          <button>+ add lyric</button>
          <button>+ add from spotify</button>
        </div>
        <button className="deleteSongBtn" onClick={() => deleteSong(activeSong._id)}>
          <Trash height={50} width={50} />
        </button>
      </article>
      <footer>
        
      </footer>
    </article>
  )
}

const mapStateToProps = (state: any) => ({
  activeSong: state.activeList.current
})

export default connect(mapStateToProps)(ActiveSong)
