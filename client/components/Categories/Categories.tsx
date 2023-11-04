import React from 'react'
import { getCategories } from '../../apis/category'
import { useQuery } from 'react-query'

function Categories() {
  const { isLoading, data } = useQuery('getCategories', async () => {
    return await getCategories()
  })
  return (
    <div>
      <h1>Categories</h1>
      <div>
        {!isLoading &&
          data &&
          data.map((category) => (
            <div key={category.id}>
              <h2>{category.name}</h2>
              <h3>{category.imageUrl}</h3>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Categories
