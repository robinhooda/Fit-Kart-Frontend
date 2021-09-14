import React, { useEffect, useState } from 'react'
import './Home.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from 'axios'
import '../../components/ProductCard/ProductCard.css'
import { PRODUCTS_URL } from '../../services/url.service'

const Home = () => {
  console.log("hii",PRODUCTS_URL)
  const [product, setProduct] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async function () {
      console.log("hii",PRODUCTS_URL)
      try {
        const response = await axios.get(PRODUCTS_URL)
        console.log(response.data.products)
        console.log('data aa gya')
        setProduct(response.data.products)
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
      <h2 className='pad-lg'>Featured Prodssssucts of the week</h2>
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
