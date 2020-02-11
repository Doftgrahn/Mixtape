import React, { useState, FC } from 'react'
import { connect, useDispatch } from 'react-redux'

import { setDescription } from '../../../logic/activeBoard/activeBoardAction'
import { addDescription } from '../../../logic/setlist/setlistAction'

const Description: FC<any> = ({ description }) => {
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

  const textArea = (
    <textarea
      onBlur={onBlur}
      value={descriptionValue}
      onChange={e => setDescriptionValue(e.target.value)}
      autoFocus
    />
  )

  const showDescription = (
    <p onClick={() => setIsEditing(true)}>{!description ? 'Add a description' : description}</p>
  )

  return <div className="description_wrapper">{isEditiing ? textArea : showDescription}</div>
}
const mapStateToProps = (state: any) => ({
  description: state.activeBoard.activeBoard.description
})

export default connect(mapStateToProps)(Description)
