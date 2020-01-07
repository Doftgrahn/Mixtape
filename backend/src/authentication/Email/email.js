const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email_login,
    pass: process.env.email_passport
  }
})

const getPasswordUrl = (user, token) => {
  const { id } = user
  return `http://localhost:3000/updatePassword/${id}/${token}`
}

const resetPassportTemplate = (user, url) => {
  const from = process.env.EMAIL_LOGIN
  const to = user.email
  const subject = 'Göran || Mixtape - Passport Reset'

  const html = `
    <h1>Hej ${user.name || user.email}</h1>
    <p>Vi hörde att du har glömt bort ditt lösenord!</p>
    <p>Ingen fara! Gå in på den här länken för återställa ditt lösenord!</p>
    <a href=${url}>${url}</a>
    <p> Om du inte använder den inom en timma så kommer den försvinna!</p>
    `
  return { from, to, subject, html }
}

module.exports = { transporter, getPasswordUrl, resetPassportTemplate }
