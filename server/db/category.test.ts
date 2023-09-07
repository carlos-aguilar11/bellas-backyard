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

describe('getCategoryWithProductId', () => {
  it('should return a list of products with the same categoryId', async () => {
    const user = await db.getCategoryWithProductsById('categoryId', testDb)

    expect(user).toHaveProperty('id')
  })
})
