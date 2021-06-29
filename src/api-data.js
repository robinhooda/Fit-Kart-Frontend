import axios from 'axios'
import { useEffect, useState } from 'react'

export const ProductData = () => {
  const [products, setProduct] = useState([])

  const fetchProducts = async (setProduct) => {
    try {
      const response = await axios.get('http://localhost:3020/products')
      setProduct(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }
  fetchProducts(setProduct)

  return products
}
