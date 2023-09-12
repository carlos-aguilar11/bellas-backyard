import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'

import { useAuth0 } from '@auth0/auth0-react'

function LogIn() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <h1>Welcome to Bella's Backyard</h1>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Log In</button>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <div>
          <p>Welcome, {user?.name}!</p>
          <button onClick={handleSignOut}>Log Out</button>
        </div>
      </IfAuthenticated>
    </>
  )
}

export default LogIn
