import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { movePlaylistItem } from '../../../logic/list/moveAction'

import Playlistitem from './playlistItem/playListItem'

// Checks if touchScreen
const isTouchDevice = () => ('ontouchstart' in window ? true : false)
const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend

const ShowList: FC<any> = ({ list, loading }) => {
  const dispatch = useDispatch()

  const moveCard = (dragIndex: any, hoverIndex: any) => {
    dispatch(movePlaylistItem(dragIndex, hoverIndex))
  }

  const playistItem = list.map((list: any, index: number) => (
    <CSSTransition key={list._id} timeout={500} classNames="item">
      <Playlistitem key={list._id} list={list} index={index} id={list._id} moveCard={moveCard} />
    </CSSTransition>
  ))

  return (
    <DndProvider backend={backendForDND}>
      <ul className="playlist">
        <TransitionGroup component={null}>{playistItem} </TransitionGroup>
      </ul>
    </DndProvider>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.list.list
})

export default connect(mapStateToProps)(ShowList)
