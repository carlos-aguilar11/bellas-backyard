exports.up = function (knex) {
  return knex.schema.createTable('orderItems', function (table) {
    table.increments('id').primary()
    table.number('orderId')
    table.number('productId')
    table.number('quantity')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orderItems')
}
