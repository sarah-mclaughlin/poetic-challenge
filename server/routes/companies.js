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
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/comment', (req, res) => {
  db.addComment(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// this is ugly! Re-write function so that only if db.getCompanyById
// returns a length > 1 then formatResults is run on it.
router.get('/company/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getIds()
    .then(zipCodes => {
      const results = zipCodes.map(zipCode => zipCode.companyId)
      if (results.includes(id)) {
        db.getCompanyByIdComments(id)
          .then(results => {
            const company = formatResults(results)
            res.json({company})
          })
          .catch(err => {
            res.status(500).send(err.message)
          })
      } else {
        db.getCompanyById(id)
          .then(company => {
            res.json({company})
          })
          .catch(err => {
            res.status(500).send(err.message)
          })
      }
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

function formatResults (results) {
  const formatted = []
  results.forEach(result => {
    if (!formatted.some(item => item.id === result.id)) {
      formatted.push({
        id: result.id,
        companyName: result.companyName,
        sector: result.sector,
        symbol: result.symbol,
        zipCode: result.zipCode,
        timesRated: result.timesRated,
        totalRating: result.totalRating,
        comments: [result.comment]
      })
    } else {
      const existing = formatted.find(item => item.id === result.id)
      existing.comments.push(result.comment)
    }
  })
  return formatted
}

module.exports = router
