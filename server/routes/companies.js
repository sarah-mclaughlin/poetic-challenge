const express = require('express')

const getZipCodes = require('../apiClient').getZipCodes
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  getZipCodes(req.query.data)
    .then(res => {
      const arr = res.zip_codes.map(Number)
      console.log(arr)
      db.getCompaniesByZipCodes(arr)
        .then(companies => {
          res.json({companies})
        })
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
