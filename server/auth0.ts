const auth0Config = {
  domain: process.env.AUTH0_DOMAIN || ' ',
  clientId: process.env.AUTH0_CLIENT_ID || ' ',
  redirectUri: 'bellasbackyard.com/info',
}

export default auth0Config
