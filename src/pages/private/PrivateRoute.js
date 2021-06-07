import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export const PrivateRoute = ({ ...props }) => {
  const { auth } = useAuth
  return auth ? <Route {...props} /> : <Navigate replace to='/login' />
}
