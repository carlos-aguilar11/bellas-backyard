import express from 'express'
import { validateAccessToken } from '../auth0'
const router = express.Router()

import { addUser, getUserByAuth0Id } from '../db/user'

router.get('/', validateAccessToken, async (req, res) => {
  try {
    const auth0Id = req.auth?.payload.sub
    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }
    const profile = await getUserByAuth0Id(auth0Id)

    if (!profile) {
      // User doesn't exist in your database, return null
      return res.json(null)
    }

    res.json({ profile })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const auth0Id = req.auth?.payload.sub
    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }

    const existingUser = await getUserByAuth0Id(auth0Id)
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }
    const newUser = req.body
    const createdUser = await addUser(newUser)
    res.json({ profile: createdUser })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
