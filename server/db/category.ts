import { CategoryWithProducts } from '../../models/category'
import connection from './connection'

export async function getCategoryWithProductsById(
  id: number,
  db = connection
): Promise<CategoryWithProducts | null> {
  const category = await db('categories').where('id', id).select().first()

  if (!category) {
    return null
  }

  const products = await db('products')
    .where('categoryId', id)
    .select('products.*')

  const categoryWithProducts: CategoryWithProducts = {
    ...category,
    products,
  }

  return categoryWithProducts
}
