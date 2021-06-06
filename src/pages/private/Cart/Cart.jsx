import React from 'react'
import { useCart } from '../../../contexts/cart-context'
import EmptyCartSVG from '../../../assets/images/empty_cart.svg'
import { Link } from 'react-router-dom'
import CartCard from '../../../components/CartCard/CartCard'
import './Cart.css'

const Cart = () => {
  const { state } = useCart()
  console.log(state)
  const totalItems = state.cart.length
  const totalMRP = state.cart.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  )
  const totalDiscount = state.cart.reduce((acc, cur) => {
    const discount = Math.floor((cur.price * cur.discount) / 100) * cur.quantity
    return acc + discount
  }, 0)
  const totalAmountPayAble = totalMRP - totalDiscount
  return (
    <div className='cart'>
      {/* if no items are added */}
      {state.cart.length === 0 ? (
        <div className='center'>
          <img
            src={EmptyCartSVG}
            className='noItemsFoundImg'
            alt='EmptyCartSVG'
          />
          <h2 className='mar-t-md'>Opps! Your cart is empty!</h2>
          <button className='primary-button large-button mar-t-lg'>
            <Link className='links' to='/shop'>
              Browse products
            </Link>{' '}
          </button>
        </div>
      ) : (
        <div className='cart-wrapper'>
          <div className='cart-grid'>
            <div className='cart-grid__heading flex bold'>
              <div>My Shopping Bag ({totalItems} items)</div>
              <div>Total: Rs. {totalAmountPayAble}</div>
            </div>
            <div className='cart-grid__items'>
              {state.cart.map((product) => {
                console.log(product)
                return (
                  <CartCard
                    id={product._id}
                    name={product.name}
                    quantity={product.quantity}
                    url={product.url}
                    price={product.price}
                    discount={product.discount}
                    isNew={product.isNew}
                  />
                )
              })}
            </div>
          </div>
          <div className='order-summary'>
            <div className='text-center bold pad-t-sm pad-b-sm'>
              PRICE DETAILS ({totalItems} items)
            </div>
            <div className='order-summary__card'>
              <div className='order-total flex mid-gray'>
                <div className='mid-gray'>Total MRP</div>
                <div className='mid-gray'>Rs. {totalMRP}</div>
              </div>
              <div className='order-discount flex'>
                <div className='mid-gray'>Discount on MRP</div>
                <div className='green bold'>- Rs. {totalDiscount}</div>
              </div>
              <div className='order-amount flex'>
                <div className='mid-gray'>Total Amount</div>
                <div className='mid-gray'>Rs. {totalAmountPayAble}</div>
              </div>
              <button className='order-button text-center'>PLACE BUTTON</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
