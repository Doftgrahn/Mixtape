import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearAndHide } from '../../logic/activeList/activeListAction'
import { deleteListItem } from '../../logic/list/listAction'

import UpdateSong from './updateSong/updateSong'
import SideMenuCross from '../../assets/sidemenuCross/sideMenuCross'
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser'

import Lyrics from './lyrics/lyrics'
const ActiveSong: FC<any> = ({ activeList }) => {
  const dispatch = useDispatch()
  const { current } = activeList

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
    <article className={`activeSong sidebar ${current._id ? 'active' : null}`}>
      <header className="sidebarHeader">
        <button onClick={hide}>
          <SideMenuCross height={20} width={20} />
        </button>
      </header>
      <article>
        <UpdateSong />
        <h1>Spotify</h1>
        <h1>Lyrics</h1>

        {current.lyrics ? newText(current.lyrics) : <Lyrics />}
      </article>
      <footer>
        <button onClick={() => deleteSong(current._id)}>delete song</button>
      </footer>
    </article>
  )
}

const mapStateToProps = (state: any) => ({
  activeList: state.activeList
})

export default connect(mapStateToProps)(ActiveSong)
