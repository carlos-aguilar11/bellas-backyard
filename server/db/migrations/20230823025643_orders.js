exports.up = function (knex) {
  return knex.schema.createTable('orders', function (table) {
    table.increments('id').primary()
    table.integer('userId').unsigned().references('id').inTable('users')
    table.string('orderStatus').notNullable()
    table.integer('orderTotal').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
