import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { Auth0Provider } from '@auth0/auth0-react'
import auth0Config from '../auth0-config'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirectUri: auth0Config.redirectUri,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
