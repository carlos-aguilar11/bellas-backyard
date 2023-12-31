export interface User {
  profile: any
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

export interface NewUser {
  auth0Id: string
  email: string
  imageUrl?: string
  name: string
  lastName: string
  username: string
}
