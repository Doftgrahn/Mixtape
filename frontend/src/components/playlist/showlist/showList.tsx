import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

import { movePlaylistItem } from '../../../logic/list/moveAction'

import Playlistitem from './playlistItem/playListItem'

import Fade from 'react-reveal/Fade'

// Checks if touchScreen
const isTouchDevice = () => ('ontouchstart' in window ? true : false)
const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend

const ShowList: FC<any> = ({ list }) => {
  const dispatch = useDispatch()

  const moveCard = (dragIndex: any, hoverIndex: any) => {
    dispatch(movePlaylistItem(dragIndex, hoverIndex))
  }

  const playistItem = list.map((list: any, index: number) => (
    <Playlistitem key={list._id} list={list} index={index} id={list._id} moveCard={moveCard} />
  ))

  return (
    <DndProvider backend={backendForDND}>
      <Fade cascade>
        <ul className="playlist">{playistItem}</ul>
      </Fade>
    </DndProvider>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.list.list
})

export default connect(mapStateToProps)(ShowList)
