import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'
import config from './knexfile'
import * as db from './category'

const testDb = knex(config.test)

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('getCategoryWithProductsById', () => {
  it('should return a category with products', async () => {
    const categoryId = 1

    const categoryWithProducts = await db.getCategoryWithProductsById(
      categoryId,
      testDb
    )

    expect(categoryWithProducts).toHaveProperty('id')
    expect(categoryWithProducts).toHaveProperty('name')
    expect(categoryWithProducts).toHaveProperty('imageUrl')
    expect(categoryWithProducts).toHaveProperty('products')
  })
})
