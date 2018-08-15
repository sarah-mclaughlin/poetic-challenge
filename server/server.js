const path = require('path')
const express = require('express')

const companiesRoutes = require('./routes/companies')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/companies', companiesRoutes)

module.exports = server
