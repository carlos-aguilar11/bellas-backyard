exports.seed = async function (knex) {
  await knex('products').where('categoryId', 6).del()
  await knex('products').insert([
    {
      imageUrl: 'placeholder.jpg',
      name: 'Placeholder Toy',
      price: 9.99,
      description: 'This is a placeholder toy.',
      categoryId: 6,
    },
  ])
}
