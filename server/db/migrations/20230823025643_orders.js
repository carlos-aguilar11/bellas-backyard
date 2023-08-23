exports.up = function (knex) {
  return knex.schema.createTable('orders', function (table) {
    table.increments('id').primary()
    table.number('userId')
    table.string('orderStatus')
    table.number('orderTotal')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
