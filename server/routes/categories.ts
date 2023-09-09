import express = require('express')
const router = express.Router()

import db = require('../db/category')

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)

  db.getCategoryWithProductsById(id)
    .then((category) => {
      if (category) {
        res.json(category)
      } else {
        res.status(404).json({ message: 'Category not found' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Error in server' })
    })
})

export default router
