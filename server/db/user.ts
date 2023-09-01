import connection from './connection'
import { User } from '../../models/user'

export async function getUserById(id: number): Promise<User | null> {
  try {
    const user = await connection<User>('users').where('id', id).first()
    return user || null
  } catch (error) {
    throw new Error('Error fetching user by ID: ' + error.message)
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await connection<User>('users').where('email', email).first()
    return user || null
  } catch (error) {
    throw new Error('Error fetching user by email: ' + error.message)
  }
}
