import config from './knexfile'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'

const env = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[env])

export default connection
