import connection from './connection'
import { User } from '../../models/user'

export async function getUserByAuth0Id(
  auth0Id: string,
  db = connection
): Promise<User> {
  return db('users').where('auth0Id', auth0Id).select().first()
}
