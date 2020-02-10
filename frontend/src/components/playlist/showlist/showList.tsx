import React, { useEffect, FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

import { fetchSongList, clearAllTracks } from '../../../logic/list/listAction'
import { movePlaylistItem } from '../../../logic/list/moveAction'

import Playlistitem from './playlistItem/playListItem'

// Checks if touchScreen
const isTouchDevice = () => ('ontouchstart' in window ? true : false)
const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend

const ShowList: FC<any> = ({ list }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongList())
    return () => {
      dispatch(clearAllTracks())
    }
  }, [dispatch])

  const moveCard = (dragIndex: any, hoverIndex: any) => {
    dispatch(movePlaylistItem(dragIndex, hoverIndex))
  }

  const playistItem = list.map((list: any, index: number) => (
    <Playlistitem key={list._id} list={list} index={index} id={list._id} moveCard={moveCard} />
  ))

  return (
    <DndProvider backend={backendForDND}>
      <ul className="playlist">{playistItem}</ul>
    </DndProvider>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.list.list,
  active: state.activeList
})

export default connect(mapStateToProps)(ShowList)
