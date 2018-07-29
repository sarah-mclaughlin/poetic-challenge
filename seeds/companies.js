exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(() => {
      // Inserts seed entries
      return knex('companies').insert([
        {
          id: 1,
          company_name: 'company one',
          zip_code: 77479,
          times_rated: 5,
          total_rating: 20
        },
        {
          id: 2,
          company_name: 'company two',
          zip_code: 77580,
          times_rated: 8,
          total_rating: 24
        },
        {
          id: 3,
          company_name: 'company three',
          zip_code: 76132,
          times_rated: 10,
          total_rating: 45
        }
      ])
    })
}
