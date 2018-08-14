exports.up = (knex, Promise) => {
  return knex.schema.createTable('companies', table => {
    table.increments('id')
    table.string('company_name')
    table.string('sector')
    table.string('symbol')
    table.integer('zip_code')
    table.integer('times_rated')
    table.integer('total_rating')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('companies')
}
