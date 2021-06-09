export const cartReducer = (products) => {
  return (cartReducerState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        let addedProduct = products.find(
          (item) => item._id === action.payload.productId
        )
        let isProductExistsInCart = cartReducerState.cart.find(
          (item) => item._id === action.payload.productId
        )

        if (isProductExistsInCart) {
          let cartAfterUpdate = cartReducerState.cart.map((item) => {
            return item._id === action.payload.productId
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item }
          })
          return {
            ...cartReducerState,
            cart: [...cartAfterUpdate],
          }
        } else {
          return {
            ...cartReducerState,
            cart: [...cartReducerState.cart, { ...addedProduct, quantity: 1 }],
          }
        }

      case 'ADD_TO_WISHLIST':
        const wishlistedProduct = products.find(
          (item) => item._id === action.payload.productId
        )

        return {
          ...cartReducerState,
          wishlist: [...cartReducerState.wishlist, wishlistedProduct],
        }

      case 'REMOVE_FROM_WISHLIST':
        let wishlist = cartReducerState.wishlist.filter(
          (item) => item._id !== action.payload.productId
        )

        return { ...cartReducerState, wishlist: [...wishlist] }

      case 'REMOVE_FROM_CART':
        let cart = cartReducerState.cart.filter(
          (item) => item._id !== action.payload.productId
        )

        return { ...cartReducerState, cart: [...cart] }

      case 'MOVE_FROM_WISHLIST_TO_CART':
        let newWishlist = cartReducerState.wishlist.filter(
          (item) => item._id !== action.payload.productId
        )
        let productToBeAdded = products.find(
          (item) => item._id === action.payload.productId
        )
        let isProductExistInCart = cartReducerState.cart.find(
          (item) => item._id === action.payload.productId
        )

        if (isProductExistInCart) {
          let cartAfterUpdate = cartReducerState.cart.map((item) => {
            return item._id === action.payload.productId
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item }
          })
          return {
            ...cartReducerState,
            cart: [...cartAfterUpdate],
            wishlist: [...newWishlist],
          }
        } else {
          return {
            ...cartReducerState,
            cart: [
              ...cartReducerState.cart,
              { ...productToBeAdded, quantity: 1 },
            ],
            wishlist: [...newWishlist],
          }
        }

      case 'MOVE_FROM_CART_TO_WISHLIST':
        let newCart = cartReducerState.cart.filter(
          (item) => item._id !== action.payload.productId
        )
        let productToBeWishListed = products.find(
          (item) => item._id === action.payload.productId
        )

        return {
          ...cartReducerState,
          cart: [...newCart],
          wishlist: [...cartReducerState.wishlist, productToBeWishListed],
        }

      default:
        return cartReducerState

      case 'INCREASE_QUANTITY':
        let cartAfterUpdate = cartReducerState.cart.map((item) => {
          return item._id === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        })
        return {
          ...cartReducerState,
          cart: [...cartAfterUpdate],
        }
      case 'DECREASE_QUANTITY':
        let newCartAfterUpdate = cartReducerState.cart.map((item) => {
          return item._id === action.payload.productId
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item }
        })
        return {
          ...cartReducerState,
          cart: [...newCartAfterUpdate],
        }
    }
  }
}
// export const cartReducer = (cartReducerState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         let addedProduct = products.find(
//           (item) => item._id === action.payload.productId
//         )
//         let isProductExistsInCart = cartReducerState.cart.find(
//           (item) => item._id === action.payload.productId
//         )

//         if (isProductExistsInCart) {
//           let cartAfterUpdate = cartReducerState.cart.map((item) => {
//             return item._id === action.payload.productId
//               ? { ...item, quantity: item.quantity + 1 }
//               : { ...item }
//           })
//           return {
//             ...cartReducerState,
//             cart: [...cartAfterUpdate],
//           }
//         } else {
//           return {
//             ...cartReducerState,
//             cart: [...cartReducerState.cart, { ...addedProduct, quantity: 1 }],
//           }
//         }

//       case 'ADD_TO_WISHLIST':
//         const wishlistedProduct = products.find(
//           (item) => item._id === action.payload.productId
//         )

//         return { ...cartReducerState, wishlist: [...cartReducerState.wishlist, wishlistedProduct] }

//       case 'REMOVE_FROM_WISHLIST':
//         let wishlist = cartReducerState.wishlist.filter(
//           (item) => item._id !== action.payload.productId
//         )

//         return { ...cartReducerState, wishlist: [...wishlist] }

//       case 'REMOVE_FROM_CART':
//         let cart = cartReducerState.cart.filter(
//           (item) => item._id !== action.payload.productId
//         )

//         return { ...cartReducerState, cart: [...cart] }

//       case 'MOVE_FROM_WISHLIST_TO_CART':
//         let newWishlist = cartReducerState.wishlist.filter(
//           (item) => item._id !== action.payload.productId
//         )
//         let productToBeAdded = products.find(
//           (item) => item._id === action.payload.productId
//         )
//         let isProductExistInCart = cartReducerState.cart.find(
//           (item) => item._id === action.payload.productId
//         )

//         if (isProductExistInCart) {
//           let cartAfterUpdate = cartReducerState.cart.map((item) => {
//             return item._id === action.payload.productId
//               ? { ...item, quantity: item.quantity + 1 }
//               : { ...item }
//           })
//           return {
//             ...cartReducerState,
//             cart: [...cartAfterUpdate],
//             wishlist: [...newWishlist],
//           }
//         } else {
//           return {
//             ...cartReducerState,
//             cart: [...cartReducerState.cart, { ...productToBeAdded, quantity: 1 }],
//             wishlist: [...newWishlist],
//           }
//         }

//       case 'MOVE_FROM_CART_TO_WISHLIST':
//         let newCart = cartReducerState.cart.filter(
//           (item) => item._id !== action.payload.productId
//         )
//         let productToBeWishListed = products.find(
//           (item) => item._id === action.payload.productId
//         )

//         return {
//           ...cartReducerState,
//           cart: [...newCart],
//           wishlist: [...cartReducerState.wishlist, productToBeWishListed],
//         }

//       default:
//         return cartReducerState

//       case 'INCREASE_QUANTITY':
//         let cartAfterUpdate = cartReducerState.cart.map((item) => {
//           return item._id === action.payload.productId
//             ? { ...item, quantity: item.quantity + 1 }
//             : { ...item }
//         })
//         return {
//           ...cartReducerState,
//           cart: [...cartAfterUpdate],
//         }
//       case 'DECREASE_QUANTITY':
//         let newCartAfterUpdate = cartReducerState.cart.map((item) => {
//           return item._id === action.payload.productId
//             ? { ...item, quantity: item.quantity - 1 }
//             : { ...item }
//         })
//         return {
//           ...cartReducerState,
//           cart: [...newCartAfterUpdate],
//         }
//     }
//   }
