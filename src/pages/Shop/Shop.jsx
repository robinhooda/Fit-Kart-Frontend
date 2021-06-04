import React from 'react'
import './Shop.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Aside from '../../components/Aside/Aside'
import { useCart } from '../../contexts/cart-context'

const Shop = () => {
  const { products } = useCart()
  return (
    <div className='Shop'>
      <Aside />
      <div className='main'>
        {products.map((product) => {
          return (
            <ProductCard
              id={product._id}
              name={product.name}
              url={product.url}
              price={product.price}
              discount={product.discount}
              isNew={product.isNew}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Shop
