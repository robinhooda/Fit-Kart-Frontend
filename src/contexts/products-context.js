import React, { createContext, useContext, useReducer } from 'react'
import { productsReducer } from '../reducers/Products-reducer'

const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: [],
    sortBy: 'none',
    showOnlyFastDelivery: false,
    showOnlyNewStock: false,
    priceRange: 0,
  })

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProducts = () => {
  return useContext(ProductsContext)
}

export { ProductsProvider, useProducts }
