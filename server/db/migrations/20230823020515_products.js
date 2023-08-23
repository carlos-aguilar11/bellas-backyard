exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('imageUrl')
    table.string('name')
    table.decimal('price', 10, 2)
    table.string('description')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('products')
}
