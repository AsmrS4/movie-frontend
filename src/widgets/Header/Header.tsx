import './Header.scss'
import { useAppSelector } from '@hooks/useAppSelector'
import { clearSession } from '@shared/store/slices/AuthorizationSlice'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
const Header = () => {
	const { isAuthorized } = useAppSelector(state => state.authorizationReducer)
	const dispatch: any = useDispatch()
	const handleClick = () => {
		if (isAuthorized) {
			dispatch(clearSession())
		}
		window.location.href = '/auth'
	}
	const handleNavigate = (path: string) => {
		window.location.href = path
	}
	return (
		<header className='header'>
			<nav className='header__navigation-panel'>
				<div className='header__logo'>HIT's Movies</div>
				<ul className='navigation-panel__holder'>
					<li className='navigation-panel__nav-item'>Главная</li>
					{isAuthorized && (
						<>
							<li
								className='navigation-panel__nav-item'
								onClick={() => {
									handleNavigate('/favourites')
								}}
							>
								Избранное
							</li>
							<li
								className='navigation-panel__nav-item'
								onClick={() => {
									handleNavigate('/profile')
								}}
							>
								Профиль
							</li>
						</>
					)}
				</ul>
				<div className='header__actions'>
					<Button size='large' onClick={handleClick}>
						{isAuthorized ? 'Выйти' : 'Войти'}
					</Button>
				</div>
			</nav>
		</header>
	)
}

export default Header
