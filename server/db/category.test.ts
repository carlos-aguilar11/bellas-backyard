import {
  beforeEach,
  beforeAll,
  afterAll,
  describe,
  it,
  expect,
  test,
  vi,
} from 'vitest'
import knex from 'knex'
import config from './knexfile'
import * as db from './category'

const testDb = knex(config.test)

beforeAll(async () => {
  await testDb.migrate.latest()
  await testDb.seed.run()
})

beforeEach(async () => {
  await testDb.migrate.rollback()
  await testDb.migrate.latest()
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('getCategoryWithProductsById', () => {
  vi.mock('./category', () => {
    const fakeCategory = {
      id: 1,
      name: 'Vegetables',
      imageUrl: 'storage.com',
      products: [
        {
          id: 1,
          name: 'Carrot',
          description: 'Organic carrot - Price is for each',
          price: 0.99,
          imageUrl: 'https://example.com/carrot.jpg',
        },
      ],
    }

    return {
      getCategoryWithProductsById: vi.fn(() => fakeCategory),
    }
  })

  it('should return a category with details', async () => {
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

  it('should return the correct category with products', async () => {
    const categoryId = 1
    const result = await db.getCategoryWithProductsById(categoryId)
  })
})
