const express = require('express')
const bookshelfRouter = express.Router()

bookshelfRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end('Will send all the books to you')
  })
  .post((req, res) => {
    res.end(`Will add the books: ${req.body.name} with much data`)
  })
  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT is not supported on /bookshelf')
  })
  .delete((req, res) => {
    res.end('Deleted entire shelf. Are you sure you wanted to do that?!')
  })

module.exports = bookshelfRouter
