// set up express object
const express = require('express')
const app = express()
const port = 3000

// serve static assets from the 'public' directory
app.use(express.static('public'))

// respond to HTTP GET request with string
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// listen on port 3000 for requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})