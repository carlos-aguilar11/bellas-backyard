exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('name')
    table.price('number')
    table.string('description')
  })
}
