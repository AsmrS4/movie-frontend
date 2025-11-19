import { useAppSelector } from '@hooks/useAppSelector'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
	const isAuthorized = useAppSelector(state => state.authorizationReducer)
	return isAuthorized ? <Outlet /> : <Navigate to={'/auth'} />
}

export default PrivateRoute
