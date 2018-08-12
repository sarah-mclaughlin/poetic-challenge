const express = require('express')

const getZipCodes = require('../apiClient').getZipCodes
const db = require('../db')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  getZipCodes(req.query.data)
    .then(response => {
      const arr = response.zip_codes.map(Number)
      db.getCompaniesByZipCodes(arr)
        .then(companies => {
          res.json({companies})
        })
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/rate', (req, res) => {
  db.rateCompany(req.body)
    // .then(() => {
    //   db.getCompanyById(req.body.id)
    // })
    // .then((company) => {
    //   res.json({company})
    // })
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/company/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getCompanyById(id)
    .then(company => {
      res.json({company})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
