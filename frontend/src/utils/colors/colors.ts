import { lightLogo, darkLogo } from './logo/logo'
import { addBoardLight, addboardDark } from './addboard/addboard'

const black = '#223843'
const white = '#EFF1F3'
const whiteGray = '#DBD3D8'
const lightOrange = '#D8B4A0'
const blueGray = '#C5CCCF'
const orange = '#D77A61'

export const lightTheme: any = {
  '--color-background': whiteGray,
  '--color-background-list': white,
  '--color-text': black,
  '--color-text-container': white,
  '--color-headlineText': black,
  '--color-boxcolor': black,
  '--color-button': black,
  ...lightLogo,
  ...addBoardLight
}

export const darkTheme: any = {
  '--color-background': black,
  '--color-background-list': lightOrange,
  '--color-text': black,
  '--color-headlineText': white,
  '--color-boxcolor': '',
  '--color-button': '',
  ...darkLogo,
  ...addboardDark
}
