exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, company_id: 7, comment: 'Great company, excellent service'},
        {id: 2, company_id: 7, comment: 'Poor customer service'},
        {id: 3, company_id: 61, comment: 'Amazing product, friendly staff'},
        {id: 4, company_id: 61, comment: 'Easy convenient location and plenty of parking'},
        {id: 5, company_id: 96, comment: 'Staff were very helpful'}
      ])
    })
}
