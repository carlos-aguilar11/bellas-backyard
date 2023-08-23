exports.up = function (knex) {
  return knex.schema.createTable('carts', function (table) {
    table.increments('id').primary()
    table.number('userId')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('carts')
}
