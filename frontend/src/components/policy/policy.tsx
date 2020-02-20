import React, { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
interface P {
  text: string
}

const policyData: P[] = [
  { text: 'This is a school project, a prototype.' },
  { text: 'I only save save data for this applicaiton only.' },
  { text: 'I will only use cookies to keep you logged in.' },
  { text: 'I would never ever share this information to third parties.' },
  { text: 'You have the right to have your data deleted.' },
  { text: 'You have the right to see what kind of data i haved saved.' },
  { text: 'If you have any questions:' }
]

const Policy: FC<{}> = () => {
  const policy = policyData.map((text: P): ReactNode => <p>{text.text}</p>)

  return (
    <main className="policy">
      <Link to="/">Go Back</Link>
      <div className="policy_container">
        <h1>Yo awesome person!</h1>
        {policy}
        <a href="mailto:simon.grahn.web@gmail.com" target="_top _blank" rel="noopener noreferrer">
          simon.grahn.web@gmail.com
        </a>
      </div>
    </main>
  )
}

export default Policy
