import React, { FC, useState, useEffect } from 'react'
import { setLightTheme, setDarkTheme } from '../../../logic/theme/themeAction'
import { useDispatch, connect } from 'react-redux'

const ThemeSwitcher: FC<any> = ({ theme }) => {
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    theme.state === 'light' ? setIsChecked(false) : setIsChecked(true)
  }, [theme.state])

  const toggleTheme = () => {
    theme.state === 'light' ? dispatch(setDarkTheme()) : dispatch(setLightTheme())
    setIsChecked(!isChecked)
  }

  return (
    <div className="theme_switch">
      <h4 className="theme_switch-title">Theme Settings:</h4>
      <div className="theme_switch-wrapper">
        <span aria-labelledby="emoji" role="img">
          ☀️
        </span>
        <input checked={isChecked} onChange={toggleTheme} type="checkbox" id="switch" />
        <label htmlFor="switch">Toggle</label>
        <span role="img" aria-labelledby="emoji">
          🌛
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  theme: state.theme
})

export default connect(mapStateToProps)(ThemeSwitcher)
