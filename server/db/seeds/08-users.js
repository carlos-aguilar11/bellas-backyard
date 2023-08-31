exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      auth0_id: 'auth0|user1',
      email: 'bella.aguilar@example.com',
      imageUrl: 'bella.jpg',
      name: 'Isabella',
      lastName: 'Aguilar',
      username: 'bella',
    },
    {
      auth0_id: 'auth0|user2',
      email: 'john@example.com',
      imageUrl: 'user1-image.jpg',
      name: 'John',
      lastName: 'Doe',
      username: 'johndoe',
    },
    {
      auth0_id: 'auth0|user3',
      email: 'jane@example.com',
      imageUrl: 'user2-image.jpg',
      name: 'Jane',
      lastName: 'Smith',
      username: 'janesmith',
    },
  ])
}
