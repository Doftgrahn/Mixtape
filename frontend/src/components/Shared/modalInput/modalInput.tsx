import React, { FC } from 'react'

interface ModalInputInterface {
  value: string
  setValue: Function
  pressEnter: Function
  placeholder: string
}

const ModalInput: FC<ModalInputInterface> = ({ value, setValue, pressEnter, placeholder }) => {
  return (
    <input
      tabIndex={0}
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyPress={e => pressEnter(e)}
      placeholder={placeholder}
      autoFocus
    />
  )
}

export default ModalInput
