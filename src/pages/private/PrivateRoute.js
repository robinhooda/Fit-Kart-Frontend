import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export const PrivateRoute = ({ path, ...props }) => {
  const { auth } = useAuth()

  return auth ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to='/login' />
  )
}
