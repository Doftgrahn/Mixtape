import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearAndHide } from '../../logic/activeList/activeListAction'
import { deleteListItem } from '../../logic/list/listAction'

import UpdateSong from './updateSong/updateSong'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import { activeSong } from '../../logic/activeList/activeListAction'

import Lyrics from './lyrics/lyrics'
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

  const newText = (text: string) => <p className="lyricText"> {text} </p>

  return (
    <article className={`activeSong sidebar ${activeSong._id ? 'active' : null}`}>
      <header className="sidebarHeader">
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <UpdateSong />
        <h1>Spotify</h1>
        <h1>Lyrics</h1>

        {activeSong.lyrics ? newText(activeSong.lyrics) : <Lyrics />}
      </article>
      <footer>
        <button onClick={() => deleteSong(activeSong._id)}>delete song</button>
      </footer>
    </article>
  )
}

const mapStateToProps = (state: any) => ({
  activeSong: state.activeList.current
})

export default connect(mapStateToProps)(ActiveSong)
