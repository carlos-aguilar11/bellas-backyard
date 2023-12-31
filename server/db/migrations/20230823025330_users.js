exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0Id').unique()
    table.string('email').unique().notNullable()
    table.string('imageUrl')
    table.string('name').notNullable()
    table.string('lastName').notNullable()
    table.string('username').unique().notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
