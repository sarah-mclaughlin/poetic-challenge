import request from 'superagent'

const sentimentUrl = '/api/v1/sentiment'

const companiesUrl = '/api/v1/companies'

export function getSentiment (phrase) {
  return request.get(sentimentUrl)
    .query({phrase})
}

export function getCompanies (data) {
  return request.get(companiesUrl)
    .query({data})
}
