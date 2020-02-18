import React, { FC } from 'react'
import './spinner.scss'
const Spinner: FC<{}> = () => {
  return (
    <div className="spinner">
      <div className="loading"></div>
    </div>
  )
}

export default Spinner
