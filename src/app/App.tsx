import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from '@app/PrivateRoute'
import ProfilePage from '@pages/Profile'
import AuthPage from '@pages/Auth/AuthPage'
import MovieCataloguePage from '@pages/Catalogue'
import MoviePage from '@pages/Movie'
import Header from '@widgets/Header/Header'
import Footer from '@widgets/Footer/Footer'

function App() {
	return (
		<>
			<main className='application-content-container'>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<MovieCataloguePage />} />
						<Route path='/movie/:id' element={<MoviePage />} />
						<Route element={<PrivateRoute />}>
							<Route
								path='/favourites'
								element={<MovieCataloguePage />}
							/>
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
