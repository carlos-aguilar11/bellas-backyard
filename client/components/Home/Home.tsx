import React from 'react'

import Nav from '../Nav/Nav'
import Categories from '../Categories/Categories'

function Home() {
  return (
    <div>
      <Nav />
      <Categories />
      <div className="text-blue-300">Home</div>
    </div>
  )
}

export default Home
