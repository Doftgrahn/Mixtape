import React, { FC } from 'react'
import { connect } from 'react-redux'

const ShowLyrics: FC<any> = ({ active }) => {
  return <p className="lyricText">{active.current.lyrics ? active.current.lyrics : null}</p>
}

const mapStatetoProp = (state: any) => ({
  active: state.activeList
})

export default connect(mapStatetoProp)(ShowLyrics)
