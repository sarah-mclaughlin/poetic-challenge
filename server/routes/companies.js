const express = require('express')

const getZipCodes = require('../apiClient').getZipCodes
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  getZipCodes(req.query.data)
    .then(res => {
      console.log(res.zip_codes)
      db.getCompaniesByZipCodes(res.zip_codes)
        .then(companies => {
          res.json({companies})
        })
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
