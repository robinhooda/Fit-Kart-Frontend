import React, { useEffect } from 'react'
import { useCart } from '../../../contexts/cart-context'
import WishListCard from '../../../components/WishListCard/WishListCard'
import NoItemsFoundSVG from '../../../assets/images/empty.svg'
import { Link } from 'react-router-dom'
import './WishList.css'
import axios from 'axios'
import { useAuth } from '../../../contexts/AuthContext'
import { CART_URL, WISHLIST_URL } from '../../../services/url.service'
const WishList = () => {
  const { state } = useCart()
  const { auth } = useAuth()

  useEffect(() => {
    ;(async function () {
      try {
        console.log('wishlist post ho rhi hai')
        const response = await axios.post(WISHLIST_URL, state.wishlist, {
          headers: {
            'auth-token': auth,
          },
        })
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
        const response = await axios.post(CART_URL, apiCart, {
          headers: {
            'auth-token': auth,
          },
        })
        const cart = response.data
        console.log({ cart })
      } catch (err) {
        console.log('Error!!!', err)
      }
    })()
  }, [auth, state])

  return (
    <div className='main'>
      {state.wishlist.length === 0 && (
        <div className='center'>
          <img
            src={NoItemsFoundSVG}
            className='noItemsFoundImg'
            alt='NoItemsFoundSVG'
          />
          <h2 className='mar-t-md'>Opps! No items are wishListed</h2>
          <button className='primary-button large-button mar-t-lg'>
            <Link className='links' to='/shop'>
              Browse products
            </Link>{' '}
          </button>
        </div>
      )}

      {state.wishlist.map((product) => {
        return (
          <WishListCard
            key={product._id}
            id={product._id}
            name={product.name}
            url={product.url}
            price={product.price}
            discount={product.discount}
            isNew={product.isNewStock}
          />
        )
      })}
    </div>
  )
}

export default WishList
