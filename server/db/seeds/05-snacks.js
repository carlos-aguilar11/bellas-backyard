exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      imageUrl: 'storage.com',
      name: 'Sweets Cookies',
      price: 1.99,
      description: 'Sugar free cookies for kids - Price is for each',
      categoryId: 4,
    },
    {
      imageUrl: 'storage.com',
      name: 'Cheese Snacks',
      price: 2.99,
      description: 'Cheessy sticks - Price is for each',
      categoryId: 4,
    },
    {
      imageUrl: 'storage.com',
      name: 'French Fries',
      price: 5.99,
      description: 'Tasty french fries - Price is for pack',
      categoryId: 4,
    },
  ])
}
