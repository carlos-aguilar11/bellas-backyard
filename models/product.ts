export interface Product {
  id: number
  image_url: string
  name: string
  price: number
  description: string
}

export interface Category {
  id: number
  name: string
  image_url: string
}

export interface User {
  id: number
  username: string
  email: string
  password: string
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
}

export interface OrderItem {
  id: number
  orderId: number
  productId: number
  quantity: number
}
