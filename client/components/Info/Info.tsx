import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NewUser } from '../../../models/user'
import { createUser } from '../../apis/user'
import { useNavigate } from 'react-router-dom'

function Info() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isAuthenticated && user) {
      const auth0Id = user?.sub || ''
      const email = user?.email || ''

      const defaultImage = `https://ui-avatars.com/api/?name=${name}+${lastName}&size=200`

      const finalImage = imageUrl || defaultImage

      const newUser: NewUser = {
        auth0Id,
        email,
        name,
        lastName,
        username,
        imageUrl: finalImage,
      }
      try {
        const token = await getAccessTokenSilently()
        await createUser(newUser, token)

        navigate('/')
      } catch (error) {
        console.error('Error creating user:', error)
      }
    } else {
      console.error('User is undefined')
    }
  }

  return (
    <div>
      <h1>Complete your Profile</h1>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last Name"
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image Link:</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Add a link to your picture"
            />
            <span>(optional)</span>
          </div>
          <button type="submit">Submit Profile</button>
        </form>
      ) : (
        <div>Please sign in to complete your profile.</div>
      )}
    </div>
  )
}

export default Info
