import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { addToList } from '../../logic/list/listAction'

const AddToList: FC<{}> = () => {
  const dispatch = useDispatch()
  const addSong = () => dispatch(addToList())

  return (
    <div>
      <h1>Lägg till en låt!</h1>
      <hr />
      <button onClick={addSong}>Add song!</button>
    </div>
  )
}

export default AddToList
