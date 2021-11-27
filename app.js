const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const bodyParser = require('body-parser')
const passwordGenerator = require('./Controller/passwordGenerator')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  passwordGenerator(10, 1, 3, 3, 3)
  res.sendFile(`${__dirname}/View/index.html`)
})

app.post('/', (req, res) => {
  let passwordLength = req.body.passwordLength
  let uppercase = req.body.uppercaseLength
  let lowercase = req.body.lowercaseLength
  let symbols = req.body.symbolsLength
  let number = req.body.numberLength
  //----------------------------------------------------------------

  res.send(
    passwordGenerator(passwordLength, uppercase, lowercase, symbols, number),
  )
})

app.listen(port, (err) => {
  if (!err) console.log('server started running on:' + port)
  else console.log('unable to start server')
})
