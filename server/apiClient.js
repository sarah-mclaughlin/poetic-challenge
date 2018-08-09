const request = require('superagent')

// https://www.zipcodeapi.com/API#distance is the website for the zipCode api

const zipCodeApplicationKey = 'uwuFClbXngHsF9fLu8bSjMUf789peuoH4Qch1yL5PGYac1zHYLGmuw1I2l61HBgf'

const sentimentKey = '8zdlxkbEjqmshIg0JzR0qN5Ndqc3p1PXmhXjsnJvX4hNVR2Yio'
const sentimentUrl = 'https://community-sentiment.p.mashape.com/text/'

module.exports = {
  getSentiment,
  getZipCodes
}

function getSentiment (phrase) {
  return request.post(sentimentUrl)
    .set('X-Mashape-Key', sentimentKey)
    .send(`txt=${phrase}`)
}

function getZipCodes (data) {
  return request.get(`https://www.zipcodeapi.com/rest/${zipCodeApplicationKey}/radius.json/${data.zipCode}/${data.distance}/${data.units}?minimal`)
    .then(res => {
      return res.body
    })
}
