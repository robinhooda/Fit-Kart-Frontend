import React, { useEffect, useState } from 'react'
import './Shop.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Aside from '../../components/Aside/Aside'
import { useCart } from '../../contexts/cart-context'
import Loader from '../../components/Loader/Loader'
import axios from 'axios'
import { ProductData } from '../../api-data'
import { useProducts } from '../../contexts/products-context'

const Shop = () => {
  // const { products } = useCart()
  // console.log({ products })

  const [product, setProduct] = useState([])
  const {
    dispatch: productDispatch,
  } = useProducts()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("shop ka useEffectchal rha hai")
    ;(async function () {
      try {

        const response = await axios.get('http://localhost:3020/products')
        console.log(response.data.products)
        console.log("data aa gya")
        setProduct(response.data.products)
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
        {product.map((product) => {
          return (
            <ProductCard
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
