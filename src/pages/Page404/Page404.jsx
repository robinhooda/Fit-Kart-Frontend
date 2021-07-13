import React from 'react'
import NotFound404 from '../../assets/images/404-not-found.svg'
import { Link } from 'react-router-dom'
const Page404 = () => {
  return (
    <div className='center'>
      <img src={NotFound404} alt='404 Not Found' className='noItemsFoundImg' />
      <h2 className='mar-sm'>Page Not Found</h2>
      <div className='text-center line-height-190'>
        <div>We're sorry the page you requested could not be found</div>
        <div>Please go back to the homepage</div>
        <Link className='links' to="/shop">
          <button className='large-button primary-button mar-t-sm'>
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Page404
