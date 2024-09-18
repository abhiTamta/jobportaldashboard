import React from 'react'
import { RouterProvider } from 'react-router-dom'
import pageRouter from './routers'

const App = () => {
  return (
    <RouterProvider router={pageRouter} />
  )
}

export default App