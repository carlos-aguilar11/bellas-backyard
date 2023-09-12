import { CategoryWithProducts } from '../../models/category'
import db from './connection'

export function getAllCategories() {
  return db('categories').select('id', 'name', 'imageUrl').orderBy('id')
}

export async function getCategoryWithProductsById(
  id: number
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
