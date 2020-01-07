import React, { useEffect, useReducer, FC } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginUser } from '../../logic/auth/authAction'

const Login: FC = ({ auth, errors, history }) => {
  const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
    email: '',
    password: ''
  })

  const handleChange = (evt: any) => {
    const name = evt.target.name
    const newValue = evt.target.value
    setUserInput({ [name]: newValue })
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/mixtapeww')
    }
  }, [auth.isAuthenticated, history])

  const onSubmit = e => {
    e.preventDefault()
    const userData = {
      email: userInput.email.toLowerCase(),
      password: userInput.password
    }
    dispatch(loginUser(userData))
  }

  return (
    <main>
      <Link to="/">Landingpage</Link>
      <hr />
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
          placeholder="email"
          style={{ margin: '10px' }}
          autoComplete="email"
        />
        <input
          autoComplete="currentPassword"
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleChange}
          placeholder="password"
          style={{ margin: '10px' }}
        />

        {errors ? errors.email : null}
        {errors ? errors.emailnotfound : null}
        {errors ? errors.passwordincorrect : null}
        <br />
        <Link to="/recoverPassword">Glömt ditt lösenord?</Link>
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
