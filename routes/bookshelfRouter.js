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

bookshelfRouter
  .route('/:bookId')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end(`Will send book Id #${req.params.bookId} to you.`)
  })
  .post((req, res) => {
    res.end(`Will add the book: ${req.body.name}`)
  })
  .put((req, res) => {
    res.end(
      `Will update the book Id #${req.params.bookId} with info like its name: ${req.body.name}`
    )
  })
  .delete((req, res) => {
    res.end(`Deleted book ${req.params.bookId} with name of ${req.body.name}`)
  })

module.exports = bookshelfRouter
