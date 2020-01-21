import React, { FC, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'

import { activeSong, setCurrentSong } from '../../../../logic/activeList/activeListAction'
import { showLyricModal } from '../../../../logic/modal/modalAction'
import ItemTypes from './itemType'

import Paper from '../../../../assets/paper/paper'

const Playlistitem: FC<any> = ({ active, list, index, id, moveCard }): any => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLLIElement>(null)
  const { current, isActive } = active
  const setActiveSong = (id: string) => dispatch(activeSong(id))
  const shortCutLyrics = (song: any) => dispatch(setCurrentSong(song)) && dispatch(showLyricModal())

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: any, monitor: DropTargetMonitor) {
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
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  })
  drag(drop(ref))

  const opacity = isDragging ? 0.6 : 1

  return (
    <li
      ref={ref}
      key={list._id}
      className={current._id === list._id && isActive ? 'showActiveSong' : ''}
      style={{ opacity }}>
      <div className="song">
        <h3>{list.title}</h3>
      </div>
      <div className="edit">
        {list.lyrics ? (
          <button onClick={() => shortCutLyrics(list)}>
            <Paper height={20} width={20} />
          </button>
        ) : null}
        <button onClick={() => setActiveSong(list._id)}>Edit / More info</button>
      </div>
    </li>
  )
}

const mapStateToProps = (state: any) => ({
  active: state.activeList
})

export default connect(mapStateToProps)(Playlistitem)
