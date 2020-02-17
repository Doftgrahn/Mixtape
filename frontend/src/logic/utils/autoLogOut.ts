export default (dispatch: any, logoutUser: Function) => {
  const inDevelopment = process.env.NODE_ENV === 'development'
  const url = inDevelopment
    ? 'http://localhost:4000/api/users/logout'
    : 'https://www.mixtape.nu/api/users/logout'

  dispatch(logoutUser())
  return window.location.replace(url)
}
