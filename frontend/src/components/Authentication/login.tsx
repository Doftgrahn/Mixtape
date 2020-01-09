import React, { useEffect, useState, FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginUser } from '../../logic/auth/authAction'
import { LoginProps } from './types'

const Login: FC<LoginProps> = ({ auth, errors, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (auth.isAuthenticated && history) {
      history.push('/mixtapew')
    }
  }, [auth.isAuthenticated, history])

  const onSubmit = (e: any): void => {
    e.preventDefault()
    const userData = {
      email: email.toLowerCase(),
      password: password
    }
    dispatch(loginUser(userData))
  }

  return (
    <main>
      <hr />
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          style={{ margin: '10px' }}
          autoComplete="email"
        />
        <input
          autoComplete="currentPassword"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          style={{ margin: '10px' }}
        />

        {errors ? errors.email : null}
        {errors ? errors.emailnotfound : null}
        {errors ? errors.passwordincorrect : null}
        <br />
        <Link to="/forgotPassword">Glömt ditt lösenord?</Link>
        <hr />
        <button type="submit">Logga in</button>
      </form>
      <hr />
      <Link to="/register">Registera</Link>
    </main>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps)(Login)
