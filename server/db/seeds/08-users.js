exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      imageUrl: 'bella.jpg',
      name: 'Isabella',
      lastName: 'Aguilar',
      username: 'bella',
      email: 'bella.aguilar@example.com',
    },
    {
      imageUrl: 'user1-image.jpg',
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'john@example.com',
    },
    {
      imageUrl: 'user2-image.jpg',
      name: 'Jane',
      lastName: 'Smith',
      username: 'janesmith',
      email: 'jane@example.com',
    },
  ])
}
