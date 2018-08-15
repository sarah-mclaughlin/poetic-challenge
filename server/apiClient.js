const request = require('superagent')

// https://www.zipcodeapi.com/API#distance is the website for the zipCode api

const zipCodeApplicationKey = 'uwuFClbXngHsF9fLu8bSjMUf789peuoH4Qch1yL5PGYac1zHYLGmuw1I2l61HBgf'

module.exports = {
  getZipCodes
}

function getZipCodes (data) {
  return request.get(`https://www.zipcodeapi.com/rest/${zipCodeApplicationKey}/radius.json/${data.zipCode}/${data.distance}/${data.units}?minimal`)
    .then(res => {
      return res.body
    })
}
