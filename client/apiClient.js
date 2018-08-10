import request from 'superagent'

const companiesUrl = '/api/v1/companies'

export function getCompanies (data) {
  return request.get(companiesUrl)
    .query({data})
}

export function getCompany (id) {
  return request.get(`${companiesUrl}/company/${id}`)
    .then(res => {
      return res.body
    })
}
