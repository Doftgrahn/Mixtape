import React, { FC, useState } from 'react'
import BoardSettings from '../../boardSettings/boardSettings'
const ListHeader: FC<any> = ({ history, title }) => {
  const [isVisible, setIsVisible] = useState(false)
  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  return (
    <header>
      <button onClick={history.goBack}>go back</button>
      <h1>Logo</h1>
      <h1>{title}</h1>
      <button onClick={show}>Meny</button>
      <BoardSettings isVisible={isVisible} hide={hide} />
    </header>
  )
}

export default ListHeader
