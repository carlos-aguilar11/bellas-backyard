import express from 'express'
import * as path from 'node:path'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/')

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

export default server
