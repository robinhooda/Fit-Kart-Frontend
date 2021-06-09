import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/cart-context'
import './ProductCard.css'

const ProductCard = ({
  id,
  url,
  name,
  subHeading,
  price,
  discount,
  isNewStock,
}) => {
  const { state, dispatch } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discountAmount = Math.floor((price * discount) / 100)
  const payableAmount = price - discountAmount

  useState(() => {
    const isProductAdded = state.cart.find((item) => item._id === id)
    isProductAdded ? setIsAdded(true) : setIsAdded(false)

    const isProductWishlisted = state.wishlist.find((item) => item._id === id)
    isProductWishlisted ? setIsWishlisted(true) : setIsWishlisted(false)
  }, [state])

  return (
    <div class='card'>
      <div class='thumbnail'>
        {isNewStock && (
          <>
            <div class='card-badge'>
              <div class='box1'></div>
              <div class='box2'></div>
            </div>
            <span class='card-badge-text bold'>NEW</span>
          </>
        )}
        <div class="product-image">
          <img src={url} alt='productImage' />
        </div>
      </div>
      <div class='card-content'>
        <div class='flex'>
          <div class='bold card-content-heading'>{name}</div>
          {isWishlisted ? (
            <i
              class='fas fa-heart red cursor-pointer'
              onClick={() => {
                dispatch({
                  type: 'REMOVE_FROM_WISHLIST',
                  payload: { productId: id },
                })
                setIsWishlisted(false)
              }}
            ></i>
          ) : (
            <i
              class='far fa-heart cursor-pointer'
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_WISHLIST',
                  payload: { productId: id },
                })
                setIsWishlisted(true)
              }}
            ></i>
          )}
        </div>

        <div class='thin card-content-subHeading'>{subHeading}</div>
        <div class='card-content-description'>
          <span class='bold'>Rs. {payableAmount} </span>
          <span class='gray thin strike-through'>Rs. {price}</span>
          <span class='dark-blue'>({discount}% OFF)</span>
        </div>
        <div class='card-action'>
          {isAdded ? (
            <button class='card-button'>
              <Link className='links' to='/cart'>
                Go to Cart
                <i class='fas fa-arrow-right pad-l-sm'></i>
              </Link>
            </button>
          ) : (
            <button
              class='card-button'
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: { productId: id } })
                setIsAdded(true)
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
