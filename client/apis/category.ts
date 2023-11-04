import request from 'superagent'
import { Category } from '../../models/category'

const rootUrl = '/api/v1/categories'

export async function getCategories() {
  try {
    const res = await request
      .get(rootUrl)
      .set('Content-Type', 'application/json')
    return res.body as Category[]
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('An unknown error occurred:', error)
    }
    return null
  }
}
