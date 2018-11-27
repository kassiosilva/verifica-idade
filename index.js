const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.render('form')
})

app.post('/check', (req, res) => {
  if (req.body.age >= 18) {
    return res.redirect(`/major/?age=${req.body.age}`)
  } else {
    return res.redirect(`/minor/?age=${req.body.age}`)
  }
})

app.get('/major', (req, res) => {
  return res.send(`Você é maior de idade e possui ${req.query.age} anos`)
})

app.get('/minor', (req, res) => {
  return res.send(`Você é menor de idade e posssui ${req.query.age} anos`)
})

app.listen(3000)
