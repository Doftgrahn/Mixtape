import { lightLogo, darkLogo } from './logo/logo'
import { addBoardLight, addboardDark } from './addboard/addboard'

import { lightModal, darkModal } from './modal/modal'
export const black = '#223843'
export const white = '#EFF1F3'
export const whiteGray = '#DBD3D8'
export const lightOrange = '#D8B4A0'
export const blueGray = '#C5CCCF'
export const orange = '#D77A61'

export const lightTheme: any = {
  '--color-background': whiteGray,
  '--color-background-list': white,
  '--color-text': black,
  '--color-text-container': white,
  '--color-headlineText': black,
  '--color-boxcolor': black,
  '--color-button': black,
  '--color-add-song-button': orange,
  ...lightLogo,
  ...addBoardLight,
  ...lightModal
}

export const darkTheme: any = {
  '--color-background': black,
  '--color-background-list': lightOrange,
  '--color-text': black,
  '--color-headlineText': white,
  '--color-boxcolor': '',
  '--color-button': orange,
  '--color-add-song-button': blueGray,
  ...darkLogo,
  ...addboardDark,
  ...darkModal
}
