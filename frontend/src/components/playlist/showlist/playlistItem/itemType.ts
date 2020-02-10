export default {
  CARD: 'card'
}

export interface CardProps {
  id: any
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
  active: any
  list: any
  activeTrack: boolean
}

export interface DragItem {
  index: number
  id: string
  type: string
}
