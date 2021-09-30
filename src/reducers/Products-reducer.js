export const productsReducer = (reducerState, action) => {
  switch (action.type) {
    case 'PRODUCTS':
      return { ...reducerState, products: action.payload }

    case 'SORT':
      return { ...reducerState, sortBy: action.payload }

    case 'PRICE_RANGE':
      return { ...reducerState, priceRange: action.payload }

    case 'TOGGLE_FAST_DELIVERY':
      return {
        ...reducerState,
        showOnlyFastDelivery: action.payload,
      }
    case 'TOGGLE_NEW_STOCK':
      return {
        ...reducerState,
        showOnlyNewStock: action.payload,
      }

    case 'RESET':
      return {
        ...reducerState,
        sortBy: 'none',
        showOnlyFastDelivery: false,
        showOnlyNewStock: false,
        priceRange: 0,
      }

    default:
      break
  }
}
