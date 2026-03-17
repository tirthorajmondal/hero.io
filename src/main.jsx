import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import './index.css'
import ProductProvider from './contexts/ProductProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <RouterProvider router={router} />
  </ProductProvider>,
)
