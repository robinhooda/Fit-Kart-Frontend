import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from './contexts/cart-context'
import { AuthProvider } from './contexts/AuthContext'
import { ProductsProvider } from './contexts/products-context'
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
