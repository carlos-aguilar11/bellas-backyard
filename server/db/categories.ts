import { Category } from '../../models/category'
import connection from './connection'

export async function getCategoryById(
  id: number,
  db = connection
): Promise<Category> {
  return db('categories').where('id', id).select().first()
}
