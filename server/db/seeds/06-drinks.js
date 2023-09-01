exports.seed = async function (knex) {
  await knex('products').where('categoryId', 5).del()
  await knex('products').insert([
    {
      imageUrl: 'https://i.ibb.co/LhsKZW2/20230823-101713.jpg',
      name: 'Apple Juice',
      price: 3.99,
      description: 'Natural 1L apple juice - Price is for each',
      categoryId: 5,
    },
    {
      imageUrl: 'https://i.ibb.co/qW3f0gX/20230823-101724.jpg',
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
