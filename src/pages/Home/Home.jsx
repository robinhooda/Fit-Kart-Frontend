import React, { useEffect, useState } from 'react'
import './Home.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useProducts } from '../../contexts/products-context'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'
import '../../components/ProductCard/ProductCard.css'

const Home = () => {
  const [product, setProduct] = useState([])
  const { dispatch: productDispatch } = useProducts()

  const { auth } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async function () {
      try {
        const response = await axios.get('http://localhost:3020/products')
        console.log(response.data.products)
        setProduct(response.data.products)
        productDispatch({ type: 'PRODUCTS', payload: response.data.products })
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const featuredProducts = product.filter((product) => product.discount >= 20)

  return (
    <div className='Home bold text-center pad-l-lg pad-b-lg'>
      <div className='homeBanner'>
        <img
          src='https://api.sourceofsupplements.com/slider/1631266062260__evogen_Web (2).jpg'
          alt='header-img'
          style={{ width: '80%' }}
        />
      </div>
      <h2 className='pad-lg'>Featured Products of the week</h2>
      <div className='featuredProducts'>
        {featuredProducts.map((product) => {
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

export default Home
