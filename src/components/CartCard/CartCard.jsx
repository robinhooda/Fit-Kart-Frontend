import React from 'react'
import productImage from '../../assets/images/img1.png'
import { useCart } from '../../contexts/cart-context'
import './CartCard.css'

const CartCard = ({ id, name, quantity, url, price, discount, isNew }) => {
  const { dispatch } = useCart()
  const discountAmount = Math.floor((price * discount) / 100) * quantity
  const payableAmount = price * quantity - discountAmount
  return (
    <div className='horizontal-card mar-b-sm'>
      <div className='horizontal-card__cart-item'>
        <div className='cart-item__img'>
          <img
            className='responsive-img'
            alt='productImage'
            src={productImage}
          />
        </div>
        <div className='cart-item__flex line-height-190'>
          <div className='cart-item__details'>
            <div className='details__primary'>
              <div className='rm'>
                <strong>{name}</strong>
              </div>
              <div className='rm thin mid-gray'>Men Slim Fit Formal Shirt</div>
              <small>Sold by: XYZ Retail</small>
            </div>
            <div className='details__btns'>
              <button
                className='counter-button round mar-r-sm'
                onClick={() =>
                  dispatch({
                    type: 'DECREASE_QUANTITY',
                    payload: { productId: id },
                  })
                }
                disabled={quantity > 1 ? false : true}
              >
                -
              </button>
              {quantity}
              <button
                className='counter-button round mar-l-sm'
                onClick={() =>
                  dispatch({
                    type: 'INCREASE_QUANTITY',
                    payload: { productId: id },
                  })
                }
              >
                +
              </button>
            </div>
          </div>
          <div className='cart-item__price'>
            <h5 className='rm'>
              <strong>Rs. {payableAmount} </strong>
            </h5>
            <small className='rm thin mid-gray strike-through'>
              Rs. {price * quantity}
            </small>
            <small className='dark-blue'>({discount}% OFF)</small>
          </div>
        </div>
      </div>
      <div class='horizontal-card__btns'>
        <button
          class='remove'
          onClick={() =>
            dispatch({
              type: 'REMOVE_FROM_CART',
              payload: { productId: id },
            })
          }
        >
          REMOVE
        </button>
        <button
          class='move-to-wishlist'
          onClick={() =>
            dispatch({
              type: 'MOVE_FROM_CART_TO_WISHLIST',
              payload: { productId: id },
            })
          }
        >
          MOVE TO WISHLIST
        </button>
      </div>
    </div>
  )
}

export default CartCard
