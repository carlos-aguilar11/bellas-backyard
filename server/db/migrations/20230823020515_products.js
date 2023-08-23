exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('imageUrl')
    table.string('name').notNullable()
    table.decimal('price', 10, 2).notNullable()
    table.string('description')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('products')
}
