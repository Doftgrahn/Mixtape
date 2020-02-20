import React, { FC, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useDrag, useDrop, DropTargetMonitor, DragLayerMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'
import { activeSong, setCurrentSong } from '../../../../logic/activeList/activeListAction'
import { toggleLyricsModal } from '../../../../logic/modal/modalAction'
import ItemTypes from './itemType'
import Paper from '../../../../assets/paper/paper'
import { moveplaylistPUT, alternativePlatlist } from '../../../../logic/list/moveAction'
import { toggleActiveTrack } from '../../../../logic/sidemenu/sidemenuAction'

import { CardProps, DragItem } from './itemType'

import Edit from '../../../../assets/edit/edit'
import SpotifyIcon from '../../../../assets/spotify/spotifyIcon'
import { RootStateInterface } from '../../../../logic/types'

const Playlistitem: FC<CardProps> = ({ active, sidemenu, list, index, id, moveCard }) => {
  const dispatch = useDispatch()
  const ref = useRef<any>(null)
  const setActiveSong = (id: string) => {
    dispatch(activeSong(id))
    dispatch(toggleActiveTrack())
  }
  const shortCutLyrics = (song: any) =>
    dispatch(setCurrentSong(song)) && dispatch(toggleLyricsModal())

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(_item: DragItem, _monitor: DropTargetMonitor) {
      dispatch(moveplaylistPUT(index))
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current!.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    }
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor: DragLayerMonitor) => ({
      isDragging: monitor.isDragging()
    }),
    begin() {
      dispatch(alternativePlatlist())
    }
  })

  drag(drop(ref))

  // Classes
  const currentTrack = active._id === list._id && sidemenu ? 'showActiveSong' : ''
  const ifDragging = isDragging ? 'isDraging' : ''

  return (
    <div ref={ref} key={list._id} className={`playlistItem ${currentTrack} ${ifDragging}`}>
      <div className="song">
        <h3>{list.title}</h3>
      </div>
      <div className="edit">
        {list.spotifyTrackID ? (
          <button onClick={() => setActiveSong(list._id)}>
            <SpotifyIcon height={20} width={20} />
          </button>
        ) : null}
        {list.lyrics ? (
          <button onClick={() => shortCutLyrics(list)}>
            <Paper height={20} width={20} />
          </button>
        ) : null}
        <button onClick={() => setActiveSong(list._id)}>
          <Edit height={20} width={20} />
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootStateInterface) => ({
  active: state.activeList,
  sidemenu: state.sidemenu.activeTrack
})

export default connect(mapStateToProps)(Playlistitem)
