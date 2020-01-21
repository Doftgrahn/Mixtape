import React, { useEffect, FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import { fetchSongList } from '../../../logic/list/listAction'
import { movePlaylistItem } from '../../../logic/list/moveAction'

import Playlistitem from './playlistItem/playListItem'

const ShowList: FC<any> = ({ list }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongList())
  }, [dispatch])

  const moveCard = (dragIndex: any, hoverIndex: any) => {
    dispatch(movePlaylistItem(dragIndex, hoverIndex))
  }

  const playistItem = list.map((list: any, index: number) => (
    <Playlistitem key={list._id} list={list} index={index} id={list._id} moveCard={moveCard} />
  ))

  return (
    <DndProvider backend={Backend}>
      <ul className="playlist">{playistItem}</ul>
    </DndProvider>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.list.list,
  active: state.activeList
})

export default connect(mapStateToProps)(ShowList)
