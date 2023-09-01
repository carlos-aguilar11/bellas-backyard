const auth0Config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || ' ',
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || ' ',
  redirectUri: 'bellasbackyard.com/info',
}

export default auth0Config
