exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('imageUrl')
    table.string('name').notNullable()
    table.string('lastName').notNullable()
    table.string('username').notNullable()
    table.string('auth0_id').unique()
    table.string('email').unique().notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
