import request from 'superagent'
import { NewUser, User } from '../../models/user'

const rootUrl = '/api/user'

export async function checkUserExists(token: string): Promise<User | null> {
  const res = await request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as User
}

export async function createUser(
  newUser: NewUser,
  token: string
): Promise<User> {
  const res = await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .send(newUser)
  return res.body as User
}
