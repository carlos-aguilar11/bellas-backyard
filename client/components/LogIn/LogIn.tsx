import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { checkUserExists } from '../../apis/user'

function LogIn() {
  const { user, logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  const handleSignIn = async () => {
    try {
      // Initiate the login process through Auth0
      loginWithRedirect()
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  // This function checks if the user exists in your database
  const checkUser = async () => {
    if (user?.sub) {
      const existingUser = await checkUserExists(user.sub)

      if (existingUser) {
        // User exists in your database, redirect to the homepage
        navigate('/')
      } else {
        // User does not exist, redirect to the "info" page
        navigate('/info')
      }
    }
  }

  const handleSignOut = () => {
    logout()
  }

  return (
    <>
      <h1>Welcome to Bella&apos;s Backyard</h1>
      <IfAuthenticated>
        <button onClick={checkUser}>Check User</button>
        <button onClick={handleSignOut}>Sign out</button>
        {user && <p>Signed in as: {user.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>
    </>
  )
}

export default LogIn
