require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({name:'hello'})//auto detect header
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
1`  `