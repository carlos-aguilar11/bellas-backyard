import express from 'express'
const router = express.Router()

import * as db from '../db/category'

router.get('/', async (req, res) => {
  try {
    const categories = await db.getAllCategories()

    res.json(categories)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const category = await db.getCategoryWithProductsById(id)
    res.json(category)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
