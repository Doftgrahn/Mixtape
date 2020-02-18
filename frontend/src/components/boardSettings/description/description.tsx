import React, { useState, FC } from 'react'
import { connect, useDispatch } from 'react-redux'

import { setDescription } from '../../../logic/activeBoard/activeBoardAction'
import { addDescription } from '../../../logic/setlist/setlistAction'

const Description: FC<any> = ({ description, isOwner }) => {
  const [isEditiing, setIsEditing] = useState(false)
  const [descriptionValue, setDescriptionValue] = useState('')
  const dispatch = useDispatch()

  const updateDescription = () => {
    const send = descriptionValue || description
    dispatch(addDescription(send))
    dispatch(setDescription(send))
    setIsEditing(false)
  }

  const onBlur = () => updateDescription()

  const onEnter = (e: any) => {
    if (e.key === 'Enter') {
      updateDescription()
    }
  }

  const textArea = (
    <input
      className="input_description"
      onBlur={onBlur}
      value={descriptionValue}
      onChange={e => setDescriptionValue(e.target.value)}
      onKeyPress={e => onEnter(e)}
      autoFocus
    />
  )

  const showDescription = (
    <p onClick={() => isOwner && setIsEditing(true)}>
      {!description ? 'Add a description' : description}
    </p>
  )

  return <div className="description_wrapper">{isEditiing ? textArea : showDescription}</div>
}
const mapStateToProps = (state: any) => ({
  description: state.activeBoard.activeBoard.description,
  isOwner: state.activeBoard.activeBoard.isOwner
})

export default connect(mapStateToProps)(Description)
