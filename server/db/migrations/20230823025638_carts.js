exports.up = function (knex) {
  return knex.schema.createTable('carts', function (table) {
    table.increments('id').primary()
    table.integer('userId').unsigned().references('id').inTable('users')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('carts')
}
