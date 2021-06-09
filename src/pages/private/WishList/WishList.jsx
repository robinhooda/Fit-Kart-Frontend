import React from 'react'
import { useCart } from '../../../contexts/cart-context'
import WishListCard from '../../../components/WishListCard/WishListCard'
import NoItemsFoundSVG from '../../../assets/images/empty.svg'
import { Link } from 'react-router-dom'
import './WishList.css'
const WishList = () => {
  const { state } = useCart()
  return (
    <div className='main'>
      {state.wishlist.length === 0 && (
        <div className='center'>
          <img
            src={NoItemsFoundSVG}
            className='noItemsFoundImg'
            alt='NoItemsFoundSVG'
          />
          <h2 className="mar-t-md">Opps! No items are wishListed</h2>
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
