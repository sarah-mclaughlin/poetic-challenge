const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getCompaniesByZipCodes (zipCodes, conn = connection) {
  return conn('companies')
  // zipCodes is an array of zero or many zip codes
    .where((builder) =>
      builder.whereIn('zip_code', zipCodes)
    )
    .select(
      'id',
      'company_name as companyName',
      'zip_code as zipCode',
      'times_rated as timesRated',
      'total_rating as totalRating'
    )
}

function getCompanyById (id, conn = connection) {
  return conn('companies')
    .where('id', '=', id)
    .select(
      'id',
      'company_name as companyName',
      'zip_code as zipCode',
      'times_rated as timesRated',
      'total_rating as totalRating'
    )
}

function updateCompanyRating (company, conn = connection) {
  return conn('companies')
    .where('id', '=', company.id)
    .update({
      times_rated: company.timesRated,
      total_rating: company.totalRating
    })
}

module.exports = {
  getCompaniesByZipCodes,
  getCompanyById,
  updateCompanyRating
}
