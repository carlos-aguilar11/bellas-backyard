import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { getUserByEmail, getUserById } from './user'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getUserById', () => {
  it('should return an user by ID', async () => {
    const id = 1
    const user = await getUserById(id)
    expect(user).toHaveProperty('authOId: autho|user1')
  })
})

describe('getUserByEmail', () => {
  it('should return an user by email', async () => {
    const email = ''
    const user = await getUserByEmail(email)
    expect(user).toHaveProperty('authOId')
  })
})
