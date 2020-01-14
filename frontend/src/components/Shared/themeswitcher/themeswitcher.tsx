import React, { FC, useState, useLayoutEffect, useRef } from 'react'

import { setLightTheme, setDarkTheme } from '../../../logic/theme/themeAction'

import { useDispatch, connect } from 'react-redux'

const ThemeSwitcher: FC<any> = ({ themeState }) => {
  const firstUpdate = useRef(true)
  const dispatch = useDispatch()
  const [theme, setTheme] = useState(false)

  useLayoutEffect(() => {
    if (firstUpdate.current && themeState.state === 'dark') {
      firstUpdate.current = false
      return
    }
    if (themeState.state === 'light' && theme) {
      dispatch(setDarkTheme())
      console.log('dark')
    } else {
      dispatch(setLightTheme())
      console.log('light')
    }
  }, [theme, dispatch])

  return (
    <div className="theme_switch">
      <input checked={theme} onChange={() => setTheme(!theme)} type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  themeState: state.theme
})

export default connect(mapStateToProps)(ThemeSwitcher)
