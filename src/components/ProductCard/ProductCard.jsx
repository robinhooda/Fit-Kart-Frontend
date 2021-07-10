import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
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
  const { auth } = useAuth()
  const [isAdded, setIsAdded] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discountAmount = Math.floor((price * discount) / 100)
  const payableAmount = price - discountAmount

  useEffect(() => {
    const isProductAdded = state.cart.find((item) => item._id === id)
    isProductAdded ? setIsAdded(true) : setIsAdded(false)

    const isProductWishlisted = state.wishlist.find((item) => item._id === id)
    isProductWishlisted ? setIsWishlisted(true) : setIsWishlisted(false)
  }, [state])

  useEffect(() => {
    ;(async function () {
      try {
        console.log('wishlist post ho rhi hai')
        const response = await axios.post(
          'http://localhost:3020/wishlist',
          state.wishlist,
          {
            headers: {
              'auth-token': auth,
            },
          }
        )
        const wishlistArr = response.data.wishList.wishlistItems
        console.log({ wishlistArr })
      } catch (err) {
        console.log('Error!!!', err)
      }
    })()
  }, [auth, state])

  useEffect(() => {
    ;(async function () {
      const apiCart = state.cart.map((item) => {
        const { quantity, ...product } = item
        return {
          product,
          quantity,
        }
      })
      try {
        console.log('cart post ho rhi hai')
        const response = await axios.post(
          'http://localhost:3020/cart',
          apiCart,
          {
            headers: {
              'auth-token': auth,
            },
          }
        )
        const cart = response.data
        console.log({ cart })
      } catch (err) {
        console.log('Error!!!', err)
      }
    })()
  }, [auth, state])

  return (
    <div className='card'>
      <div className='thumbnail'>
        {isNewStock && (
          <>
            <div className='card-badge'>
              <div className='box1'></div>
              <div className='box2'></div>
            </div>
            <span className='card-badge-text bold z-10'>NEW</span>
          </>
        )}
        <div className='product-image'>
          <img src={url} alt='productImage' />
        </div>
      </div>
      <div className='card-content'>
        <div className='flex'>
          <div className='bold card-content-heading'>{name}</div>
          {isWishlisted ? (
            <i
              className='fas fa-heart red cursor-pointer'
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
              className='far fa-heart cursor-pointer'
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

        <div className='thin card-content-subHeading'>{subHeading}</div>
        <div className='card-content-description'>
          <span className='bold'>Rs. {payableAmount} </span>
          <span className='gray thin strike-through'>Rs. {price}</span>
          <span className='dark-blue'>({discount}% OFF)</span>
        </div>
        <div className='card-action'>
          {isAdded ? (
            <button className='card-button'>
              <Link className='links' to='/cart'>
                Go to Cart
                <i className='fas fa-arrow-right pad-l-sm'></i>
              </Link>
            </button>
          ) : (
            <button
              className='card-button'
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
