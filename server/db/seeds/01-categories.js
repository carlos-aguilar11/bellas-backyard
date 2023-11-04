exports.seed = async function (knex) {
  await knex('categories').del()
  await knex('categories').insert([
    {
      name: 'Vegetables',
      imageUrl: 'https://i.ibb.co/DfXpmfD/veggies.png',
    },
    {
      name: 'Fruits',
      imageUrl: 'https://i.ibb.co/6mDFxMX/fruits.png',
    },
    {
      name: 'Bakery',
      imageUrl: 'https://i.ibb.co/3CN618f/breads.png',
    },
    {
      name: 'Snacks',
      imageUrl: 'https://i.ibb.co/89W1dMp/snacks.png',
    },
    {
      name: 'Drinks',
      imageUrl: 'https://i.ibb.co/hHJZ3VC/drinks.png://ibb.co/bLM2cX7',
    },
    {
      name: 'Toys',
      imageUrl: 'https://i.ibb.co/V01tJ2m/toys.png',
    },
  ])
}
