export const GET_TRACKS = 'GET_TRACKS'
export const LYRIC_IS_LOADING = 'LYRIC_IS_LOADING'
export const CLEAR_LYRICS = 'CLEAR_LYRICS'

export const SET_LYRIC_ERROR = 'SET_LYRIC_ERROR'

interface LyricInterface {
  annotation_count: number
  api_path: string
  full_title: string
  header_image_thumbnail_url: string
  header_image_url: string
  id: number
  lyrics_owner_id: number
  lyrics_state: string
  path: string
  pyongs_count: number
  song_art_image_thumbnail_url: string
  song_art_image_url: string
  stats: object
  title: string
  title_with_featured: string
  url: string
  primary_artist: string
}

export interface LyricsStateInterface {
  lyrics: LyricInterface[]
  isLoading: boolean
}
