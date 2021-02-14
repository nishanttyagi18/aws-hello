const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('This app is running on amazon EC2')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
