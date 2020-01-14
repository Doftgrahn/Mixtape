import React, { FC } from 'react'

const BoardSettings: FC<any> = ({ isVisible, hide }) => {
  return (
    <section className={`boardSettings ${isVisible ? 'active' : null}`}>
      <header>
        <button onClick={hide}>hide</button>
      </header>
      <article>
        <button>delete board (not done yet)</button>
      </article>
      Board Settings here
    </section>
  )
}

export default BoardSettings
