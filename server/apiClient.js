const request = require('superagent')

// https://www.zipcodeapi.com/API#distance is the website for the zipCode api

const zipCodesKey = 'hkCt1nW1wF1rppaEmoor7T9G4ta7R5wFSu8l1dokNz8y53gGZHDneWWVosbEYirC'

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
  return request.get(`https://www.zipcodeapi.com/rest/${zipCodesKey}/radius.json/${data.zipCode}/${data.distance}/${data.measurement}?minimal`)
    .then(res => {
      return res.body
    })
}
