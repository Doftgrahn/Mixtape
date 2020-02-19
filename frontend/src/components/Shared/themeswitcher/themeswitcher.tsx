import React, { FC, useState, useEffect } from 'react'
import { setLightTheme, setDarkTheme } from '../../../logic/theme/themeAction'
import { useDispatch, connect } from 'react-redux'

interface ThemeSwitcherInterface {
  theme: string
}

const ThemeSwitcher: FC<ThemeSwitcherInterface> = ({ theme }) => {
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false)
  const light = 'light'

  useEffect(() => {
    theme === light ? setIsChecked(false) : setIsChecked(true)
  }, [theme])

  const toggleTheme = () => {
    theme === light ? dispatch(setDarkTheme()) : dispatch(setLightTheme())
    setIsChecked(!isChecked)
  }

  return (
    <div className="theme_switch">
      <h4 className="theme_switch-title">Theme Settings:</h4>
      <div className="theme_switch-wrapper">
        <span aria-label="Emoji of the sun" role="img">
          ☀️
        </span>
        <input checked={isChecked} onChange={toggleTheme} type="checkbox" id="switch" />
        <label htmlFor="switch">Toggle</label>
        <span role="img" aria-label="Emoji on the moon">
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
