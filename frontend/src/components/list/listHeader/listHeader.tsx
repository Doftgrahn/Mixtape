import React, { FC, useState } from 'react'
import BoardSettings from '../../boardSettings/boardSettings'

import Logo from '../../../assets/logo/Logo'

const ListHeader: FC<any> = ({ history, title }) => {
  const [isVisible, setIsVisible] = useState(false)
  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  return (
    <header className="header">
      <div className="logoWrapper">
        <Logo height={50} width={80} />
        <h1>MixTape</h1>
      </div>
      <h1>Logo</h1>
      <h1>{title}</h1>
      <div>
        <button onClick={history.goBack}>go back</button>
        <button onClick={show}>Meny</button>
      </div>
      <BoardSettings isVisible={isVisible} hide={hide} />
    </header>
  )
}

export default ListHeader
