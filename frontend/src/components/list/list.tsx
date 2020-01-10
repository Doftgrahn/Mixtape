import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { useDispatch } from 'react-redux'

import { fetchSongList } from '../../logic/list/listAction'

import AddToList from './addtoList'

const List = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSongList())
  }, [dispatch])
  return (
    <main>
      Lista med låtar!
      <AddToList />
    </main>
  )
}

export default connect()(List)
