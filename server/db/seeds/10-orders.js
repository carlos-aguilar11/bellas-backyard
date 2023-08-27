exports.seed = async function (knex) {
  await knex('orders').del()
  await knex('orders').insert([
    {
      userId: 1,
      orderStatus: 'pending',
      orderTotal: 25.99,
    },
  ])
}
