exports.seed = async function (knex) {
  await knex('categories').del()
  await knex('categories').insert([
    {
      name: 'Vegetables',
      imageUrl: 'storage.com',
    },
    {
      name: 'Fruits',
      imageUrl: 'storage.com',
    },
    {
      name: 'Bakery',
      imageUrl: 'storage.com',
    },
    {
      name: 'Snacks',
      imageUrl: 'storage.com',
    },
    {
      name: 'Drinks',
      imageUrl: 'storage.com',
    },
    {
      name: 'Toys',
      imageUrl: 'storage.com',
    },
  ])
}
