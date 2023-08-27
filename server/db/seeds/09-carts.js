exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('carts').del()
  await knex('carts').insert([
    {
      userId: 1,
    },
  ])
}
