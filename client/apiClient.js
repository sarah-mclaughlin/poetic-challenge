import request from 'superagent'

const companiesUrl = '/api/v1/companies'

export function getCompanies (data) {
  return request.get(companiesUrl)
    .query({data})
}

export function getCompany (id) {
  return request.get(`${companiesUrl}/company/${id}`)
}

export function rateCompany (data) {
  return request.put(`${companiesUrl}/rate`)
    .send(data)
}

export function addComment (data) {
  return request.post(`${companiesUrl}/comment`)
    .send(data)
}
