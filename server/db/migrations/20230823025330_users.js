exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('imageUrl')
    table.string('name')
    table.string('lastName')
    table.string('username')
    table.string('email')
    table.string('password')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
