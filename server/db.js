const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getCompaniesByZipCodes (zipCodes, conn = connection) {
  return conn('companies')
    .where((builder) =>
      builder.whereIn('zip_code', zipCodes)
    )
    .select(
      'id',
      'company_name as companyName',
      'sector',
      'symbol',
      'zip_code as zipCode',
      'times_rated as timesRated',
      'total_rating as totalRating'
    )
}

function getCompanyByIdComments (id, conn = connection) {
  return conn('companies')
    .join('comments', 'comments.company_id', '=', 'companies.id')
    .where('companies.id', '=', id)
    .select(
      'companies.id as id',
      'company_name as companyName',
      'sector',
      'symbol',
      'zip_code as zipCode',
      'times_rated as timesRated',
      'total_rating as totalRating',
      'comment'
    )
}

// shouldn't need this function
function getIds (conn = connection) {
  return conn('comments')
    .select(
      'company_id as companyId'
    )
}

// shouldn't need this function
function getCompanyById (id, conn = connection) {
  return conn('companies')
    .where('companies.id', '=', id)
    .select(
      'companies.id as id',
      'company_name as companyName',
      'sector',
      'symbol',
      'zip_code as zipCode',
      'times_rated as timesRated',
      'total_rating as totalRating'
    )
}

function rateCompany (company, conn = connection) {
  return conn('companies')
    .where('id', '=', company.id)
    .update({
      times_rated: company.timesRated,
      total_rating: company.totalRating
    })
}

function addComment (comment, conn = connection) {
  return conn('comments')
    .insert({
      'company_id': comment.id,
      'comment': comment.comment
    })
}

module.exports = {
  getCompaniesByZipCodes,
  getCompanyByIdComments,
  getCompanyById,
  getIds,
  rateCompany,
  addComment
}
