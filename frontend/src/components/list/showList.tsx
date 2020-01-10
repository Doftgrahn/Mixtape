import React, { useEffect, FC } from 'react'

import { connect } from 'react-redux'

import { useDispatch } from 'react-redux'

import { fetchSongList } from '../../logic/list/listAction'

const ShowList: FC<any> = ({ paylist }) => {
  const { list } = paylist
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongList())
  }, [dispatch])

  const renderPlaylist = list.map((list: any) => (
    <li key={list._id}>
      <button>{list.title}</button>
    </li>
  ))

  return <section>{renderPlaylist}</section>
}

const mapStateToProps = (state: any) => ({
  paylist: state.list
})

export default connect(mapStateToProps)(ShowList)
