export const GET_SPOTIFY_SEARCH = 'GET_SPOTIFY_SEARCH'
export const IS_SPOTIFY_LOADING = 'IS_SPOTIFY_LOADING'
export const ERRORS_SPOTIFY = 'ERRORS_SPOTIFY'
export const DOES_SPOTIFY_NEED_REFRESH = 'DOES_SPOTIFY_NEED_REFRESH'

export interface SpotifyStateInterface {
  spotify: []
  isLoading: boolean
  errors: object
  needsRefresh: boolean
}
