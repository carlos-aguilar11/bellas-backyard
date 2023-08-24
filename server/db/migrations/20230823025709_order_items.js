exports.up = function (knex) {
  return knex.schema.createTable('orderItems', function (table) {
    table.increments('id').primary()
    table.integer('orderId').unsigned().references('id').inTable('orders')
    table.integer('productId').unsigned().references('id').inTable('products')
    table.integer('quantity').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orderItems')
}
