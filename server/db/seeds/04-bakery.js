exports.seed = async function (knex) {
  await knex('products').where('categoryId', 3).del()
  await knex('products').insert([
    {
      imageUrl: 'storage.com',
      name: 'Croissant',
      price: 2.99,
      description: 'Fresh croissant - Price is for each',
      categoryId: 3,
    },
    {
      imageUrl: 'storage.com',
      name: 'Brioche',
      price: 4.99,
      description: 'Fresh brioche - Price is for each',
      categoryId: 3,
    },
    {
      imageUrl: 'storage.com',
      name: 'Baguette',
      price: 6.99,
      description: 'Fresh French baguette - Price is for each',
      categoryId: 3,
    },
    {
      imageUrl: 'storage.com',
      name: 'Corda',
      price: 3.99,
      description: 'Fresh corda - Price is for each',
      categoryId: 3,
    },
    {
      imageUrl: 'storage.com',
      name: 'Choc-Chip Cookie',
      price: 1.99,
      description: 'Traditional choc-chip cookie - Price is for each',
      categoryId: 3,
    },
    {
      imageUrl: 'storage.com',
      name: 'Donut',
      price: 2.99,
      description: 'Vegan donut - Price is for each',
      categoryId: 3,
    },
  ])
}
