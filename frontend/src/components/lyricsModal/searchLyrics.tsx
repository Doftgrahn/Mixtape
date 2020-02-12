import React, { FC } from 'react'
import LyricInput from './lyricInput/lyricInput'
import LyricsList from './lyricList/lyricsList'

const SearchForLyrics: FC<{}> = () => {
  return (
    <>
      <LyricInput />
      <LyricsList />
    </>
  )
}

export default SearchForLyrics
