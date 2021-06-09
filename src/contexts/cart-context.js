import axios from 'axios'
import { createContext, useContext, useReducer, useState } from 'react'
import { cartReducer } from '../reducers/Cart-reducer'
// import { products } from '../data'
import { useProducts } from './products-context'

const CartContext = createContext()

const useCart = () => {
  return useContext(CartContext)
}
const CartProvider = ({ children }) => {
  const {
    state: { products },
  } = useProducts()

  const [state, dispatch] = useReducer(cartReducer(products), {
    cart: [],
    wishlist: [],
  })

  return (
    <CartContext.Provider value={{ products, state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export { useCart, CartProvider }
