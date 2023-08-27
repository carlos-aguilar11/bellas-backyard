exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('order_items').del()
  await knex('order_items').insert([{}])
}
