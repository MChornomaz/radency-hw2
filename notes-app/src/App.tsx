import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import routes from './routes/routes'

import './App.css'

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes
    }
  ])
  return <RouterProvider router={router} />
}

export default App
