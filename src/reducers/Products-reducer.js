export const productsReducer = (reducerState, action) => {
  switch (action.type) {
    case 'PRODUCTS':
      return { ...reducerState, products: action.payload }

    case 'SORT':
      return { ...reducerState, sortBy: action.payload }

    case 'PRICE_RANGE':
      return { ...reducerState, priceRange: action.payload }

    case 'RESET':
      return { ...reducerState, sortBy: 'none', priceRange: 0 }

    default:
      break
  }
}
