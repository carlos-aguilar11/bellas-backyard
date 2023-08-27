exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orderItems').del()
  await knex('orderItems').insert([
    {
      orderId: 1,
      productId: 1,
      quantity: 2,
    },
  ])
}
