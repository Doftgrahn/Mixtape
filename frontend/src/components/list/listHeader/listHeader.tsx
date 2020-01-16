import React, { FC, useState } from 'react'
import BoardSettings from '../../boardSettings/boardSettings'

import Logo from '../../../assets/logo/Logo'

import Account from '../../../assets/account/account'

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
      <div>
        <button className="listMeny" onClick={show}>
          <Account height={50} width={50} />
        </button>
      </div>
      <BoardSettings isVisible={isVisible} hide={hide} />
    </header>
  )
}

export default ListHeader
