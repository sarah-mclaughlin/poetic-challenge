const path = require('path')
const express = require('express')

const sentimentRoutes = require('./routes/sentiment')
const companiesRoutes = require('./routes/companies')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/sentiment', sentimentRoutes)
server.use('/api/v1/companies', companiesRoutes)

module.exports = server
