import axios from 'axios'
import { useEffect, useState } from 'react'
import { PRODUCTS_URL } from './services/url.service'

export const ProductData = () => {
  const [products, setProduct] = useState([])

  const fetchProducts = async (setProduct) => {
    try {
      const response = await axios.get(PRODUCTS_URL)
      setProduct(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }
  fetchProducts(setProduct)

  return products
}
