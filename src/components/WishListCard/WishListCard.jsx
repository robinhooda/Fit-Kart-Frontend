import React from 'react'
import { useCart } from '../../contexts/cart-context'
import { Link } from 'react-router-dom'
import './WishListCard.css'
const WishListCard = ({
  id,
  url,
  name,
  subHeading,
  price,
  discount,
  isNew,
}) => {
  const { dispatch } = useCart()
  const discountAmount = Math.floor((price * discount) / 100)
  const payableAmount = price - discountAmount
  return (
    <div className='card'>
      <div className='thumbnail'>
        {isNew && (
          <>
            <div className='card-badge'>
              <div className='box1'></div>
              <div className='box2'></div>
            </div>
            <span className='card-badge-text bold'>NEW</span>
          </>
        )}
        <div className='product-image'>
          <img src={url} alt='productImage' />
        </div>
        <button
          className='cancel-button'
          onClick={() =>
            dispatch({
              type: 'REMOVE_FROM_WISHLIST',
              payload: { productId: id },
            })
          }
        >
          <i className='fas fa-trash'></i>
        </button>
      </div>
      <div className='card-content'>
        <div className='flex'>
          <div className='bold card-content-heading'>{name}</div>
        </div>

        <div className='thin card-content-subHeading'>{subHeading}</div>
        <div className='card-content-description'>
          <span className='bold'>Rs. {payableAmount} </span>
          <span className='gray thin strike-through'>Rs. {price}</span>
          <span className='dark-blue'>({discount}% OFF)</span>
        </div>
        <div className='card-action'>
          <button
            className='card-button'
            onClick={() =>
              dispatch({
                type: 'MOVE_FROM_WISHLIST_TO_CART',
                payload: { productId: id },
              })
            }
          >
            <Link className='links' to='/cart'>
              Move to Cart
              <i className='fas fa-arrow-right pad-l-sm'></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WishListCard
