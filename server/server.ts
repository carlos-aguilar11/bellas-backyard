import { join } from 'node:path'
import express from 'express'

import categories from './routes/categories'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/categories', categories)

export default server
