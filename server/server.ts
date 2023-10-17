import { join } from 'node:path'
import express from 'express'

import categoryRoutes from './routes/categories'
import userRoutes from './routes/user'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/categories', categoryRoutes)
server.use('/api/v1/users', userRoutes)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
