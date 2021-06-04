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
    <div class='card'>
      <div class='thumbnail'>
        {isNew && (
          <>
            <div class='card-badge'>
              <div class='box1'></div>
              <div class='box2'></div>
            </div>
            <span class='card-badge-text bold'>NEW</span>
          </>
        )}
        <img src={url} alt='productImage' />
        <button
          class='cancel-button'
          onClick={() =>
            dispatch({
              type: 'REMOVE_FROM_WISHLIST',
              payload: { productId: id },
            })
          }
        >
          <i class='fas fa-times-circle'></i>
        </button>
      </div>
      <div class='card-content'>
        <div class='flex'>
          <div class='bold card-content-heading'>{name}</div>
        </div>

        <div class='thin card-content-subHeading'>{subHeading}</div>
        <div class='card-content-description'>
          <span class='bold'>Rs. {payableAmount} </span>
          <span class='gray thin strike-through'>Rs. {price}</span>
          <span class='dark-blue'>({discount}% OFF)</span>
        </div>
        <div class='card-action'>
          <button
            class='card-button'
            onClick={() =>
              dispatch({
                type: 'MOVE_FROM_WISHLIST_TO_CART',
                payload: { productId: id },
              })
            }
          >
            <Link className='links' to='/cart'>
              Move to Cart
              <i class='fas fa-arrow-right pad-l-sm'></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WishListCard
