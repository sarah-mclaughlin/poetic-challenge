const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function populateDatabase (companies, conn = connection) {
  return conn('companies')
    .insert({companies})
}

function getCompaniesByZipCodes (zipCodes, conn = connection) {
  return conn('companies')
  // zipCodes is an array of zero or many zip codes
    .where('zip_code', '=', zipCodes)
    .select(
      'orders.id as orderId',
      'order_items.user_name as userName',
      'order_items.order_text as orderDetails',
      'order_items.id as orderItemId'
    )
}

function getCompanyById (id, conn = connection) {
  return conn('companies')
    .where('id', '=', id)
    .select(
      'orders.id as orderId',
      'order_items.user_name as userName',
      'order_items.order_text as orderDetails',
      'order_items.id as orderItemId'
    )
}

function updateCompanyRating (id, conn = connection) {
  return conn('companies')
    .where('id', '=', id)
    .update(
      'orders.id as orderId',
      'order_items.user_name as userName',
      'order_items.order_text as orderDetails',
      'order_items.id as orderItemId'
    )
}

module.exports = {
  populateDatabase,
  getCompaniesByZipCodes,
  getCompanyById,
  updateCompanyRating
}
