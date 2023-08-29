import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'

import * as db from './01-categories'
import config from '../knexfile'
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

// describe('', () => {
//     it('object has name property', async () => {
//     const product = await db.getProductById(1, testDb)

//     expect(product).toHaveProperty('name')
//   })

// })
