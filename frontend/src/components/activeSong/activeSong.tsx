import React, { FC } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearAndHide } from '../../logic/activeList/activeListAction'

const ActiveSong: FC<any> = ({ activeList }) => {
  const { current } = activeList
  const dispatch = useDispatch()

  const hide = () => dispatch(clearAndHide())

  if (current) {
    return (
      <section>
        <h1>{current.title}</h1>
        <button onClick={hide}>hide</button>
      </section>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state: any) => ({
  activeList: state.activeList
})
export default connect(mapStateToProps)(ActiveSong)
