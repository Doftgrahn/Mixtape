module.exports = (req, res, next) => {
  if (!req.user) {
    //req.logout()
    res.redirect('/')
  } else {
    next()
  }
}
