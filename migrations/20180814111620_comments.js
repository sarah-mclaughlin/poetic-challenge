exports.up = (knex, Promise) => {
  return knex.schema.createTable('comments', table => {
    table.increments('id').primary()
    table.integer('company_id').references('companies.id')
    table.string('comment')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('comments')
}
