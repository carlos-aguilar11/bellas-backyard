import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { checkUserExists } from '../../apis/user'
import { useEffect, useCallback, useState } from 'react'

function LogIn() {
  const { user, logout, loginWithRedirect, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

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

  // Check if the user exists in the database
  const checkUser = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently()
      const auth0Id = user?.sub // Get the Auth0 ID

      if (auth0Id) {
        const userExists = await checkUserExists(token)
        if (userExists !== null) {
          const { name } = userExists.profile
          setUserName(name)
          // User exists in the database, redirect to the homepage
          navigate('/')
        } else {
          // User does not exist, redirect to the "info" page
          navigate('/info')
        }
      }
    } catch (error) {
      console.error('Error checking user:', error)
    }
  }, [user, getAccessTokenSilently, navigate, setUserName])

  // Automatically check the user after a successful sign-in
  useEffect(() => {
    if (user) {
      checkUser()
    }
  }, [user, checkUser])

  return (
    <>
      <h1>Welcome to Bella&apos;s Backyard</h1>
      <IfAuthenticated>
        <button
          className="font-semibold bg-pink-950  hover:bg-gray-300 text-white p-1 hover:text-red-900 border border-transparent rounded"
          onClick={handleSignOut}
        >
          Sign out
        </button>
        {userName ? (
          <p>Welcome {userName}</p>
        ) : (
          <p>Loading user information...</p>
        )}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button
          className="font-semibold bg-pink-950  hover:bg-gray-300 text-white py-1 px-2 hover:text-red-900 border border-gray-400 rounded shadow"
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </IfNotAuthenticated>
    </>
  )
}

export default LogIn
