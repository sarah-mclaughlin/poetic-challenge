const path = require('path')
const express = require('express')

const sentimentRoutes = require('./routes/sentiment')
// const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/sentiment', sentimentRoutes)
// server.use('/api/v1/fruits', fruitRoutes)

module.exports = server
