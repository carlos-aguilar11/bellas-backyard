exports.seed = async function (knex) {
  await knex('products').where('categoryId', 2).del()
  await knex('products').insert([
    {
      imageUrl: 'https://i.ibb.co/rQ2PXsG/20230823-101931.jpg',
      name: 'Bananas',
      price: 5.99,
      description: 'Organic bananas - Price is for kg',
      categoryId: 2,
    },
    {
      imageUrl: 'https://i.ibb.co/jMBSm9X/20230823-102000.jpg',
      name: 'Red Apple',
      price: 0.99,
      description: 'Fresh apple - Price is for each',
      categoryId: 2,
    },
    {
      imageUrl: 'https://i.ibb.co/fH0QV4X/20230823-102020.jpg',
      name: 'Green Grapes',
      price: 9.99,
      description: 'Organic green grapes - Price is for kg',
      categoryId: 2,
    },
    {
      imageUrl: 'https://i.ibb.co/Ldv79Vz/20230823-102429.jpg',
      name: 'Red Grapes',
      price: 7.99,
      description: 'Organic red grapes - Price is for kg',
      categoryId: 2,
    },
    {
      imageUrl: 'https://i.ibb.co/0hBfGqn/20230823-102156.jpg',
      name: 'Pineapple',
      price: 7.99,
      description: 'Juicy pineapple - Price is for each',
      categoryId: 2,
    },
    {
      imageUrl: 'https://i.ibb.co/yfb18k2/20230823-102037.jpg',
      name: 'Watermelon',
      price: 2.99,
      description: 'Organic watermelon - Price is for piece',
      categoryId: 2,
    },
  ])
}
