import React, { FC } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import { addToList } from '../../logic/list/listAction'

const AddToList: FC<any> = ({ list }) => {
  const dispatch = useDispatch()

  const addSong = () => dispatch(addToList())

  return (
    <div>
      <h1>Lägg till en låt!</h1>
      <button onClick={addSong}>Klicka här!</button>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.list
})

export default connect(mapStateToProps)(AddToList)
