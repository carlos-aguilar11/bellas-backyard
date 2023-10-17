import request from 'superagent'
import { NewUser, User } from '../../models/user'

const rootUrl = '/api/v1/users'

export async function checkUserExists(token: string): Promise<User | null> {
  try {
    const res = await request
      .get(rootUrl)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
    return res.body as User
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Handle other specific errors if needed
      console.error(error.message)
    } else {
      console.error('An unknown error occurred:', error)
    }
    return null // Return null or another appropriate value
  }
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
