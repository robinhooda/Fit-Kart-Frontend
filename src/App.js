import { Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import WishList from './pages/WishList/WishList'
import Navbar from './components/Navbar/Navbar'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Page404 from './pages/Page404/Page404'
import './App.css'
function App() {

  return (
    <div className='App'>
      <Navbar />
      <div style={{ marginTop: '10vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
