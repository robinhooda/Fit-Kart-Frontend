import { Routes, Route, Navigate } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Cart from './pages/private/Cart/Cart'
import Home from './pages/Home/Home'
import WishList from './pages/private/WishList/WishList'
import Navbar from './components/Navbar/Navbar'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Page404 from './pages/Page404/Page404'
import { useAuth } from './contexts/AuthContext'
import './App.css'

const PrivateRoute = ({ login, ...props }) => {
  console.log(login)
  return login ? <Route {...props} /> : <Navigate replace to='/login' />
}
function App() {
  const { auth } = useAuth()

  return (
    <div className='App'>
      <Navbar />
      <div style={{ marginTop: '10vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <PrivateRoute path='/cart' login={auth} element={<Cart />} />
          <PrivateRoute path='/wishlist' login={auth} element={<WishList />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
