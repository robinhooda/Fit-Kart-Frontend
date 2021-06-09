import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MdFitnessCenter } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
const Navbar = () => {
  const { pathname } = useLocation()

  const { auth, setAuth } = useAuth()

  const logout = () => {
    setAuth(null)
    localStorage.clear()
  }

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
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
          <Link className={pathname === '/' ? 'links bold' : 'links'} to='/'>
            Home
          </Link>
        </div>
        <div>
          <Link
            className={pathname === '/shop' ? 'links bold' : 'links'}
            to='/shop'
          >
            Shop
          </Link>
        </div>
        <div>
          <Link
            className={pathname === '/wishlist' ? 'links bold' : 'links'}
            to='/wishlist'
          >
            <i className='fas fa-heart pad-r-xs'></i>Wishlist
          </Link>
        </div>
        <div>
          <Link
            className={pathname === '/cart' ? 'links bold' : 'links'}
            to='/cart'
          >
            <i className='fas fa-shopping-cart pad-r-xs'></i>
            Cart
          </Link>
        </div>
        {auth ? (
          <button className='transparent-button' onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <div>
              <Link
                className={pathname === '/login' ? 'links bold' : 'links'}
                to='/login'
              >
                Login
              </Link>
            </div>
            <Link
              className={pathname === '/signUp' ? 'links bold' : 'links'}
              to='/signUp'
            >
              <button className='transparent-button'>Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
