import React, { useEffect, useState } from 'react'
import './Shop.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Aside from '../../components/Aside/Aside'
import { useCart } from '../../contexts/cart-context'
import Loader from '../../components/Loader/Loader'
import axios from 'axios'
import { ProductData } from '../../api-data'
import { useProducts } from '../../contexts/products-context'
import { useAuth } from '../../contexts/AuthContext'
import { PRODUCTS_URL } from '../../services/url.service'

const Shop = () => {
  const { state, dispatch: productDispatch } = useProducts()

  const { auth } = useAuth()
  const [loading, setLoading] = useState(true)

  const sellingPrice = (price, discount) =>
    price - Math.floor((price * discount) / 100)

  const getSortedData = (productsList, sortBy) => {
    if (sortBy && sortBy === 'PRICE_HIGH_TO_LOW') {
      return [...productsList].sort(
        (a, b) =>
          sellingPrice(b.price, b.discount) - sellingPrice(a.price, a.discount)
      )
    }
    if (sortBy && sortBy === 'PRICE_LOW_TO_HIGH') {
      return [...productsList].sort(
        (a, b) =>
          sellingPrice(a.price, a.discount) - sellingPrice(b.price, b.discount)
      )
    }
    return productsList
  }

  const getDataFilteredForStock = (productsList, isNewStock) =>
    [...productsList].filter((item) => (isNewStock ? item.isNewStock : item))

  const getDataFilteredForFastDelivery = (productsList, isFastDelivery) =>
    [...productsList].filter((item) =>
      isFastDelivery ? item.fastDelivery : item
    )

  const sortedData = getSortedData(state.products, state.sortBy)
  const filteredStockData = getDataFilteredForStock(
    sortedData,
    state.showOnlyNewStock
  )
  const filteredData = getDataFilteredForFastDelivery(
    filteredStockData,
    state.showOnlyFastDelivery
  )

  useEffect(() => {
    ;(async function () {
      try {
        const response = await axios.get(PRODUCTS_URL)
        productDispatch({ type: 'PRODUCTS', payload: response.data.products })
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <div className='Shop'>
      <Aside />
      <div className='main'>
        {filteredData.map((product) => {
          return (
            <ProductCard
              key={product._id}
              id={product._id}
              name={product.name}
              url={product.url}
              price={product.price}
              discount={product.discount}
              isNewStock={product.isNewStock}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Shop
