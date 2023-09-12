import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components//App/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="carlos-aguilar.au.auth0.com"
      clientId="j1ZK6s2kISVEuLr1bUzrlDtgMy8gzbwR"
      redirectUri="http://localhost:3000/info"
      audience="https://bellas-backyard/api"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>,
  )
})
