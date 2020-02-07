import React, { FC } from 'react'
import './_edit.scss'

interface EditInterface {
  height: number
  width: number
}

const Edit: FC<EditInterface> = ({ height, width }) => {
  return (
    <svg
      className="editIcon"
      height={height}
      width={width}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512">
      <polygon points="85.333,282.64 85.333,362.64 165.333,362.64 378.667,149.307 298.667,69.307" />
      <path
        d="M441.707,56.08L391.893,6.267c-8.32-8.32-21.867-8.32-30.187,0L320,47.973l80,80l41.707-41.707
					C450.027,77.947,450.027,64.4,441.707,56.08z"
      />
      <rect y="426.64" width="512" height="85.333" />
    </svg>
  )
}

export default Edit
