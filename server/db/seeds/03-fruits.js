exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      imageUrl: 'storage.com',
      name: 'Bananas',
      price: 5.99,
      description: 'Organic bananas - Price is for kg',
      categoryId: 2,
    },
    {
      imageUrl: 'storage.com',
      name: 'Apple',
      price: 0.99,
      description: 'Fresh apple - Price is for each',
      categoryId: 2,
    },
    {
      imageUrl: 'storage.com',
      name: 'Green Grapes',
      price: 9.99,
      description: 'Organic green grapes - Price is for kg',
      categoryId: 2,
    },
    {
      imageUrl: 'storage.com',
      name: 'Red Grapes',
      price: 7.99,
      description: 'Organic red grapes - Price is for kg',
      categoryId: 2,
    },
    {
      imageUrl: 'storage.com',
      name: 'Pineapple',
      price: 7.99,
      description: 'Juicy pineapple - Price is for each',
      categoryId: 2,
    },
    {
      imageUrl: 'storage.com',
      name: 'Watermelon',
      price: 2.99,
      description: 'Organic watermelon - Price is for piece',
      categoryId: 2,
    },
  ])
}
