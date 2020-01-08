import React, { useState, FC, FormEvent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import { registerUser } from '../../logic/auth/authAction'

const Register: FC<any> = ({ history, errors }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setpassword2] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault()
    const newUser = {
      name: name,
      email: email.toLowerCase(),
      password: password,
      password2: password2
    }
    dispatch(registerUser(newUser, history))
  }

  return (
    <main>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          autoComplete="username"
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="namn"
          style={{ margin: '10px' }}
        />

        <input
          type="email"
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          style={{ margin: '10px' }}
        />

        <input
          type="password"
          autoComplete="new-password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="lösenord"
          style={{ margin: '10px' }}
        />

        <input
          type="password"
          autoComplete="new-password"
          onChange={e => setpassword2(e.target.value)}
          value={password2}
          placeholder="lösernord2"
          style={{ margin: '10px' }}
        />

        <hr />
        <button type="submit" style={{ margin: '10px' }}>
          Registera dig
        </button>
      </form>
      <Link to="/login">Logga in</Link>
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps)(withRouter(Register))
