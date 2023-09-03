import connection from './connection'
import { User, NewUser } from '../../models/user'

export async function getUserByAuth0Id(
  auth0Id: string,
  db = connection
): Promise<User> {
  return db('users').where('auth0Id', auth0Id).select().first()
}

export async function getUserByEmail(
  email: string,
  db = connection
): Promise<User> {
  return db('users').where('email', email).select().first()
}

export async function addUser(
  newUser: NewUser,
  db = connection
): Promise<User> {
  const [userId] = await db('users').insert(newUser)
  return db('users').where('id', userId).select().first()
}
