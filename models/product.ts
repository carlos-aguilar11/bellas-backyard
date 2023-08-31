export interface Product {
  id: number
  imageUrl: string
  name: string
  price: number
  description: string
  created_at: Date
  updated_at: Date
  categoryId: number
}

export interface Category {
  id: number
  name: string
  imageUrl: string
}

export interface Cart {
  id: number
  userId: number
}

export interface Order {
  id: number
  userId: number
  orderStatus: string
  orderTotal: number
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: number
  orderId: number
  productId: number
  quantity: number
}
