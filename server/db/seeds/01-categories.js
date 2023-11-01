exports.seed = async function (knex) {
  await knex('categories').del()
  await knex('categories').insert([
    {
      name: 'Vegetables',
      imageUrl: 'https://ibb.co/JjLQ8jR',
    },
    {
      name: 'Fruits',
      imageUrl: 'https://ibb.co/474pGq1',
    },
    {
      name: 'Bakery',
      imageUrl: 'https://ibb.co/wzWGybJ',
    },
    {
      name: 'Snacks',
      imageUrl: 'https://ibb.co/gJ5kPyp',
    },
    {
      name: 'Drinks',
      imageUrl: 'https://ibb.co/bLM2cX7',
    },
    {
      name: 'Toys',
      imageUrl: 'https://ibb.co/Cpczmh2',
    },
  ])
}
