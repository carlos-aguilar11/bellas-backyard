import React, { useState } from 'react'

function Info() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  return
  //create a form to add the user to our database
  //take the auth0 id and email from the login then use the rest of the information to add the user

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  ;<div>
    <h1>Complete your Profile</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={'name'}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={'lastName'}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          id="username"
          value={'username'}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image Link:</label>
        <input
          type="text"
          id="imageUrl"
          value={'imageUrl'}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Complete Profile</button>
    </form>
    <input type="text" />
  </div>
}

export default Info
