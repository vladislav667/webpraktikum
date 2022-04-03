const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/views/form', (req, res) => {
  res.render('form')
})

app.post('/views/form', (req, res) => {
    res.render('form')
  })

app.get('/', (req, res) => {
    res.render('main.css')
  })
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})