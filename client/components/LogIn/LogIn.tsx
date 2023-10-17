import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { checkUserExists } from '../../apis/user'
import { log } from 'console'

function LogIn() {
  const { user, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  const handleSignIn = async () => {
    try {
      // Initiate the login process through Auth0
      loginWithRedirect()
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
  const handleSignOut = () => {
    logout()
  }

  // This function checks if the user exists in your database
  const checkUser = async () => {
    try {
      const token = await getAccessTokenSilently()
      const auth0Id = user?.sub // Get the Auth0 ID

      if (auth0Id) {
        const userExists = await checkUserExists(token)
        if (userExists !== null) {
          // User exists in your database, redirect to the homepage
          console.log('User exists, redirecting to homepage')
          navigate('/')
        } else {
          // User does not exist, redirect to the "info" page
          console.log('User does not exist, redirecting to info')

          navigate('/info')
        }
      }
    } catch (error) {
      console.error('Error checking user:', error)
    }
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
