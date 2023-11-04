import React from 'react'
import { getCategories } from '../../apis/category'
import { useQuery } from 'react-query'

function Categories() {
  const { isLoading, data } = useQuery('getCategories', async () => {
    return await getCategories()
  })

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Categories</h1>
      <div className="flex items-center space-x-4">
        {!isLoading &&
          data &&
          data.map((category) => (
            <div key={category.id} className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="ml-2">{category.name}</h2>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Categories
