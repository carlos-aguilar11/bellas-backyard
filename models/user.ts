export interface User {
  id: number
  auth0Id: string
  email: string
  imageUrl?: string
  name: string
  lastName: string
  username: string
  createdAt: Date
  updatedAt: Date
}
