import React, { FC } from 'react'

const BoardSettings: FC<any> = ({ isVisible, hide }) => {
  return (
    <section className={`boardSettings ${isVisible ? 'active' : null}`}>
      <header>
        <button onClick={hide}>hide</button>
      </header>
      <article>
        <h1>Invite folks here</h1>
      </article>
      <footer>
        <button>delete board (not done yet)</button>
      </footer>
      Board Settings here
    </section>
  )
}

export default BoardSettings
