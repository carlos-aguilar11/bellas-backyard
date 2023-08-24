exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      imageUrl: 'storage.com',
      name: 'Carrot',
      price: 1.29,
      description: 'Organic carrot',
      category_id: 1,
    },
    {
      name: 'Broccoli',
      price: 1.99,
      description: 'Fresh broccoli',
      category_id: 1,
    },
  ])
}
