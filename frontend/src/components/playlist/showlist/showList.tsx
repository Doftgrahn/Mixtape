import React, { FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { movePlaylistItem } from '../../../logic/list/moveAction'
import Playlistitem from './playlistItem/playListItem'

import { TrackInterface } from '../../../logic/list/constants'
import { RootStateInterface } from '../../../logic/types'

// Checks if touchScreen
const isTouchDevice = () => ('ontouchstart' in window ? true : false)
const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend

interface ShowlistInterface {
  list: TrackInterface[]
}

const ShowList: FC<ShowlistInterface> = ({ list }) => {
  const dispatch = useDispatch()

  const moveCard = (dragIndex: any, hoverIndex: any) => {
    dispatch(movePlaylistItem(dragIndex, hoverIndex))
  }

  const playistItem = list.map((list: any, index: number) => (
    <CSSTransition key={list._id} timeout={500} classNames="playListItem">
      <li>
        <Playlistitem list={list} index={index} id={list._id} moveCard={moveCard} />
      </li>
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

const mapStateToProps = (state: RootStateInterface) => ({
  list: state.list.list
})

export default connect(mapStateToProps)(ShowList)
