import express from 'express'
import { validateAccessToken } from '../auth0'
const router = express.Router()

import { getUserByAuth0Id } from '../db/user'

router.get('/', validateAccessToken, async (req, res) => {
  try {
    const auth0Id = req.auth?.payload.sub
    console.log('Auth0 ID:', auth0Id)
    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }
    const profile = await getUserByAuth0Id(auth0Id)

    res.json({ profile })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
