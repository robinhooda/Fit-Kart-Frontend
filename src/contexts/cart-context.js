import axios from 'axios'
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { cartReducer } from '../reducers/Cart-reducer'
import { useAuth } from './AuthContext'
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

  const { auth } = useAuth()

  useEffect(() => {
    ;(async function () {
      try {
        const response = await axios.get('http://localhost:3020/cart', {
          headers: {
            'auth-token': auth,
          },
        })
        const cartArr = response.data.cart.cartItems
        console.log(cartArr)

        dispatch({ type: 'LOAD_CART', payload: cartArr })
      } catch (err) {
        console.log('Error!!!', err)
      }
    })()
  }, [auth])

  useEffect(() => {
    ;(async function () {
      try {
        const response = await axios.get('http://localhost:3020/wishlist', {
          headers: {
            'auth-token': auth,
          },
        })
        const wishlistArr = response.data.wishList.wishlistItems
        console.log({ wishlistArr })

        dispatch({ type: 'LOAD_WISHLIST', payload: wishlistArr })
      } catch (err) {
        console.log('Error!!!', err)
      }
    })()
  }, [auth])

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
