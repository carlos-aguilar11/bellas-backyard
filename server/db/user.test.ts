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

describe('getUserByAuth0Id', () => {
  it('object has id property', async () => {
    const user = await db.getUserByAuth0Id('auth0|user1', testDb)

    expect(user).toHaveProperty('id')
  })
  it('object has imageUrl property', async () => {
    const user = await db.getUserByAuth0Id('auth0|user1', testDb)

    expect(user).toHaveProperty('imageUrl')
  })
  it('object has name property', async () => {
    const user = await db.getUserByAuth0Id('auth0|user1', testDb)

    expect(user).toHaveProperty('name')
  })
  it('object has name property', async () => {
    const user = await db.getUserByAuth0Id('auth0|user1', testDb)

    expect(user).toHaveProperty('name')
  })
  it('object has lastName property', async () => {
    const user = await db.getUserByAuth0Id('auth0|user1', testDb)

    expect(user).toHaveProperty('lastName')
  })
  it('object has username property', async () => {
    const user = await db.getUserByAuth0Id('auth0|user1', testDb)

    expect(user).toHaveProperty('username')
  })
})

describe('getUserByEmail', () => {
  it('object has email property', async () => {
    const user = await db.getUserByEmail('bella.aguilar@example.com', testDb)

    expect(user).toHaveProperty('email')
  })
})
