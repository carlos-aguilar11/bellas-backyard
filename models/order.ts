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
