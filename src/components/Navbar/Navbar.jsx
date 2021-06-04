import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MdFitnessCenter } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <nav className='navbar'>
      <div class='navbar-brand'>
        <MdFitnessCenter size={35} />
        <div className='navbar-brand--name  bold'>Fit-Kart</div>
      </div>
      <div>
        <input
          type='text'
          placeholder='search here'
          style={{
            padding: '8px 16px',
            borderRadius: '11rem',
            border: '1px solid white',
          }}
        ></input>
      </div>
      <div className='navbar-links'>
        <div>
          <Link className={pathname==="/"?"links bold":"links"} to='/'>
            Home
          </Link>
        </div>
        <div>
          <Link className={pathname==="/shop"?"links bold":"links"} to='/shop'>
            Shop
          </Link>
        </div>
        <div>
          <Link className={pathname==="/wishlist"?"links bold":"links"} to='/wishlist'>
            Wishlist
          </Link>
        </div>
        <div>
          <Link className={pathname==="/cart"?"links bold":"links"} to='/cart'>
            Cart
          </Link>
        </div>
        <div>
          <Link className={pathname==="/login"?"links bold":"links"} to='/login'>
            Login
          </Link>
        </div>
        <Link className={pathname==="/signUp"?"links bold":"links"} to='/signUp'>
          <div
            style={{
              border: '1px solid white',
              padding: '8px 20px',
              borderRadius: '11rem',
            }}
          >
            Register
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
