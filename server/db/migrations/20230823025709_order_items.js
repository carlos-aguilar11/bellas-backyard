exports.up = function (knex) {
  return knex.schema.createTable('orderItems', function (table) {
    table.increments('id').primary()
    table.integer('orderId').notNullable()
    table.integer('productId').notNullable()
    table.integer('quantity').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orderItems')
}
