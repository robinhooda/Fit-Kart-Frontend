import { createContext, useContext, useReducer } from 'react'
import { products } from '../data'
const CartContext = createContext()

const useCart = () => {
  return useContext(CartContext)
}
const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        let addedProduct = products.find(
          (item) => item._id === action.payload.productId
        )
        let isProductExistsInCart = state.cart.find(
          (item) => item._id === action.payload.productId
        )

        if (isProductExistsInCart) {
          let cartAfterUpdate = state.cart.map((item) => {
            return item._id === action.payload.productId
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item }
          })
          return {
            ...state,
            cart: [...cartAfterUpdate],
          }
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...addedProduct, quantity: 1 }],
          }
        }

      case 'ADD_TO_WISHLIST':
        const wishlistedProduct = products.find(
          (item) => item._id === action.payload.productId
        )

        return { ...state, wishlist: [...state.wishlist, wishlistedProduct] }

      case 'REMOVE_FROM_WISHLIST':
        let wishlist = state.wishlist.filter(
          (item) => item._id !== action.payload.productId
        )

        return { ...state, wishlist: [...wishlist] }

      case 'REMOVE_FROM_CART':
        let cart = state.cart.filter(
          (item) => item._id !== action.payload.productId
        )

        return { ...state, cart: [...cart] }

      case 'MOVE_FROM_WISHLIST_TO_CART':
        let newWishlist = state.wishlist.filter(
          (item) => item._id !== action.payload.productId
        )
        let productToBeAdded = products.find(
          (item) => item._id === action.payload.productId
        )
        let isProductExistInCart = state.cart.find(
          (item) => item._id === action.payload.productId
        )

        if (isProductExistInCart) {
          let cartAfterUpdate = state.cart.map((item) => {
            return item._id === action.payload.productId
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item }
          })
          return {
            ...state,
            cart: [...cartAfterUpdate],
            wishlist: [...newWishlist],
          }
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...productToBeAdded, quantity: 1 }],
            wishlist: [...newWishlist],
          }
        }

      case 'MOVE_FROM_CART_TO_WISHLIST':
        let newCart = state.cart.filter(
          (item) => item._id !== action.payload.productId
        )
        let productToBeWishListed = products.find(
          (item) => item._id === action.payload.productId
        )

        return {
          ...state,
          cart: [...newCart],
          wishlist: [...state.wishlist, productToBeWishListed],
        }

      default:
        return state

      case 'INCREASE_QUANTITY':
        let cartAfterUpdate = state.cart.map((item) => {
          return item._id === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        })
        return {
          ...state,
          cart: [...cartAfterUpdate],
        }
      case 'DECREASE_QUANTITY':
        let newCartAfterUpdate = state.cart.map((item) => {
          return item._id === action.payload.productId
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item }
        })
        return {
          ...state,
          cart: [...newCartAfterUpdate],
        }
    }
  }
  const [state, dispatch] = useReducer(cartReducer, { cart: [], wishlist: [] })
  return (
    <CartContext.Provider value={{ products, state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export { useCart, CartProvider }
