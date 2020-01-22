import React, { FC } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import { clearAndHide } from '../../logic/activeList/activeListAction'
import { deleteListItem } from '../../logic/list/listAction'
import { showLyricModal } from '../../logic/modal/modalAction'

import UpdateSong from './updateSong/updateSong'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import Trash from '../../assets/trash/trash'

const ActiveSong: FC<any> = ({ currentsong }) => {
  const dispatch = useDispatch()
  const { current, isActive } = currentsong

  const hide = () => dispatch(clearAndHide())

  const deleteSong = (id: any) => {
    dispatch(deleteListItem(id))
    dispatch(clearAndHide())
  }

  const lyricModal = () => {
    dispatch(showLyricModal())
    dispatch(clearAndHide())
  }

  return (
    <article className={`activeSong sidebar ${isActive ? 'active' : null}`}>
      <header className="sidebarHeader">
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <UpdateSong />
        <div className="socialBtns">
          <button onClick={lyricModal}>{current.lyrics ? 'see lyrics..' : '+ add lyric'}</button>
          <button>+ add from spotify (In Development...)</button>
        </div>
        <button className="deleteSongBtn" onClick={() => deleteSong(current._id)}>
          <Trash height={50} width={50} />
        </button>
      </article>
      <footer></footer>
    </article>
  )
}

const mapStateToProps = (state: any) => ({
  currentsong: state.activeList
})

export default connect(mapStateToProps)(ActiveSong)
