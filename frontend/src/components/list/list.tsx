import React, { useEffect, FC } from 'react'
import { connect } from 'react-redux'

import { useDispatch } from 'react-redux'

import { fetchSongList } from '../../logic/list/listAction'

import AddToList from './addtoList'

const List: FC<any> = ({ list }) => {
  console.log(list)

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

const mapStateToProps = (state: any) => ({
  list: state.list
})

export default connect(mapStateToProps)(List)
