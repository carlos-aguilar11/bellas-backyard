import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'
import config from './knexfile'
import * as db from './user'

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

describe('getUserById', () => {
  it('object has id property', async () => {
    const user = await db.getUserByAuth0Id('auth0|user1', testDb)

    expect(user).toHaveProperty('email')
  })
})
