import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearAndHide } from '../../logic/activeList/activeListAction'
import { deleteListItem } from '../../logic/list/listAction'

import UpdateSong from './updateSong/updateSong'

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

  return (
    <section className="activeSongModal">
      <article className={`activeSong sidebar ${current._id ? 'active' : null}`}>
        <header>
          <button onClick={hide}>hide</button>
        </header>
        <article>
          <UpdateSong />
          <h1>Spotify</h1>
          <h1>Lyrics</h1>
        </article>
        <footer>
          <button onClick={() => deleteSong(current._id)}>delete song</button>
        </footer>
      </article>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  activeList: state.activeList
})

export default connect(mapStateToProps)(ActiveSong)
