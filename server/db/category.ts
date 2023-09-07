import { CategoryWithProducts } from '../../models/category'
import connection from './connection'

export async function getCategoryWithProductsById(
  id: number,
  db = connection
): Promise<CategoryWithProducts> {
  const category = await db('categories').where('id', id).select().first()

  if (!category) {
    throw new Error('Category not found')
  }

  const products = await db('products')
    .where('categoryId', id)
    .select('products.*')
    .join('categories', 'products.categoryId', 'categories.id')

  const categoryWithProducts: CategoryWithProducts = {
    ...category,
    products,
  }

  return categoryWithProducts
}
