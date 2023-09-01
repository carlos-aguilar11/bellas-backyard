exports.seed = async function (knex) {
  await knex('products').where('categoryId', 1).del()
  await knex('products').insert([
    {
      imageUrl: 'https://i.ibb.co/pRMPSVf/20230823-101644.jpg',
      name: 'Carrot',
      price: 0.99,
      description: 'Organic carrot - Price is for each',
      categoryId: 1,
    },
    {
      imageUrl: 'https://i.ibb.co/XpsVG44/20230823-101533.jpg',
      name: 'Broccoli',
      price: 1.99,
      description: 'Fresh broccoli - Price is for each',
      categoryId: 1,
    },
    {
      imageUrl: 'storage.com',
      name: 'Cucumber',
      price: 2.99,
      description: 'Organic cucumber - Price is for each',
      categoryId: 1,
    },
    {
      imageUrl: 'https://i.ibb.co/sqCLzv6/20230823-102052.jpg',
      name: 'Lettuce',
      price: 3.99,
      description: 'Fresh lettuce - Price is for each',
      categoryId: 1,
    },
    {
      imageUrl: 'https://i.ibb.co/G5H8j11/20230823-101757.jpg',
      name: 'Tomatoes',
      price: 9.99,
      description: 'Tasty tomatoes - Price is for tray',
      categoryId: 1,
    },
    {
      imageUrl: 'storage.com',
      name: 'Corn',
      price: 2.99,
      description: 'Organic corn - Price is for each',
      categoryId: 1,
    },
  ])
}
