import AuthPage from '@pages/Auth/AuthPage'
import Footer from '@widgets/Footer/Footer'
import Header from '@widgets/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfilePage from '@pages/Profile'
import PrivateRoute from './PrivateRoute'
import MovieCataloguePage from '@pages/Catalogue'
function App() {
	return (
		<>
			<Header />
			<main className='application-content-container'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<MovieCataloguePage />} />
						<Route path='/:id' element />
						<Route element={<PrivateRoute />}>
							<Route path='/favourites' element />
							<Route path='/profile' element={<ProfilePage />} />
						</Route>
						<Route path='/auth' element={<AuthPage />} />
					</Routes>
				</BrowserRouter>
			</main>
		</>
	)
}

export default App
