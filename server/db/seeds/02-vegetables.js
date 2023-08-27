exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      imageUrl: 'storage.com',
      name: 'Carrot',
      price: 0.99,
      description: 'Organic carrot - Price is for each',
      category_id: 1,
    },
    {
      imageUrl: 'storage.com',
      name: 'Broccoli',
      price: 1.99,
      description: 'Fresh broccoli - Price is for each',
      category_id: 1,
    },
    {
      imageUrl: 'storage.com',
      name: 'Cucumber',
      price: 2.99,
      description: 'Organic cucumber - Price is for each',
      category_id: 1,
    },
    {
      imageUrl: 'storage.com',
      name: 'Lettuce',
      price: 3.99,
      description: 'Fresh lettuce - Price is for each',
      category_id: 1,
    },
    {
      imageUrl: 'storage.com',
      name: 'Tomatoes',
      price: 9.99,
      description: 'Tasty tomatoes - Price is for tray',
      category_id: 1,
    },
    {
      imageUrl: 'storage.com',
      name: 'Corn',
      price: 2.99,
      description: 'Organic corn - Price is for each',
      category_id: 1,
    },
  ])
}
