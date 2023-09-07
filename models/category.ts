import { Product } from './product'

export interface Category {
  id: number
  name: string
  imageUrl: string
}

export interface CategoryWithProducts extends Category {
  products: Product[]
}
