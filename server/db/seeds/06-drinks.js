exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      imageUrl: 'storage.com',
      name: 'Apple Juice',
      price: 3.99,
      description: 'Natural 1L apple juice - Price is for each',
      categoryId: 5,
    },
    {
      imageUrl: 'storage.com',
      name: 'Watermelon Juice',
      price: 3.99,
      description: 'Natural 1L watermelon juice - Price is for each',
      categoryId: 5,
    },
    {
      imageUrl: 'storage.com',
      name: 'Blueberry Juice',
      price: 2.99,
      description: 'Natural 1L blueberry juice - Price is for each',
      categoryId: 5,
    },
  ])
}
