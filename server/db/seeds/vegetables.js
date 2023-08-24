exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      imageUrl: 'storage.com',
      name: 'Carrot',
      price: 0.99,
      description: 'Organic carrot - Price is for each',
      category_id: 2,
    },
    {
      imageUrl: 'storage.com',
      name: 'Broccoli',
      price: 1.99,
      description: 'Fresh broccoli = Price is for each',
      category_id: 2,
    },
  ])
}
