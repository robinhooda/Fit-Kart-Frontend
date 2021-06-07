import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import axios from 'axios'
const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [isloading, setIsloading] = useState(false)
  const navigate = useNavigate()

  const inputEvent = (event) => {
    const value = event.target.value
    const name = event.target.name

    setUserData((prev) => {
      switch (name) {
        case 'firstName':
          return {
            ...userData,
            firstName: value,
          }
        case 'lastName':
          return {
            ...userData,
            lastName: value,
          }
        case 'email':
          return {
            ...userData,
            email: value,
          }
        case 'password':
          return {
            ...userData,
            password: value,
          }
        default:
          return userData
      }
    })
  }

  const createAccount = async (event) => {
    setIsloading(true)
    try {
      const response = await axios.post('http://localhost:3020/signup', {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
      })
      console.log({ response })
      setUserData({ firstName: '', lastName: '', email: '', password: '' })
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
    setIsloading(false)
  }

  return isloading ? (
    <Loader />
  ) : (
    <div class='signup'>
      <div className='signup-wrapper'>
        <h1 className='signup-heading dark-blue'>Create an account</h1>
        <input
          type='text'
          name='firstName'
          onChange={inputEvent}
          value={userData.firstName}
          placeholder='First Name'
          className='form-input-text'
        />

        <input
          type='text'
          name='lastName'
          onChange={inputEvent}
          value={userData.lastName}
          placeholder='Last Name'
          className='form-input-text'
        />

        <input
          type='email'
          name='email'
          onChange={inputEvent}
          value={userData.email}
          placeholder='email : abcd@gmail.com'
          className='form-input-text'
        />
        <input
          type='password'
          name='password'
          onChange={inputEvent}
          value={userData.password}
          placeholder='password'
          className='form-input-text'
        />
        <button className='full-width-primary-button' onClick={createAccount}>
          CREATE AN ACCOUNT
        </button>
        <small>
          Have an account?
          <Link className='links' to='/login'>
            <span className='bold underlined dark-blue pad-l-xs'>Login</span>
          </Link>
        </small>
      </div>
    </div>
  )
}

export default SignUp
