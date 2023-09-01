exports.seed = async function (knex) {
  await knex('products').where('categoryId', 4).del()
  await knex('products').insert([
    {
      imageUrl: 'https://i.ibb.co/G2mDt8q/20230823-101629.jpg',
      name: 'Sweets Cookies',
      price: 1.99,
      description: 'Sugar free cookies for kids - Price is for each',
      categoryId: 4,
    },
    {
      imageUrl: 'https://i.ibb.co/wNDzwPD/20230823-101605.jpg',
      name: 'Cheese Snacks',
      price: 2.99,
      description: 'Cheessy sticks - Price is for each',
      categoryId: 4,
    },
    {
      imageUrl: 'https://i.ibb.co/PGXN9kq/20230823-102347.jpg',
      name: 'French Fries',
      price: 5.99,
      description: 'Tasty french fries - Price is for pack',
      categoryId: 4,
    },
  ])
}
