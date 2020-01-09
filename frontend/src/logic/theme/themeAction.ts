import { SET_LIGHT_THEME, SET_DARK_THEME, Theme } from './constants'

export const setLightTheme = () => ({
  type: SET_LIGHT_THEME,
  payload: Theme.LIGHT
})

export const setDarkTheme = () => ({
  type: SET_DARK_THEME,
  payload: Theme.DARK
})
