import 'aos/dist/aos.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
// import 'sweetalert2/src/sweetalert2.scss'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './AuthProvider/AuthProvider'
import router from './Router/Router'
import './index.css'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-7xl  mx-auto'>
          <RouterProvider router={router}>
          </RouterProvider>
        </div>
      </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
