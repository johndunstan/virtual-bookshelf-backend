const express = require('express')
const morgan = require('morgan')
const bookshelfRouter = require('./routes/bookshelfRouter')

const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/bookshelf', bookshelfRouter)

app.use((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>Express server is running.</h1></body></html>')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
