import AuthPage from '@pages/Auth/AuthPage'
import Footer from '@widgets/Footer/Footer'
import Header from '@widgets/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Header />
			<main className='application-content-container'>
				<BrowserRouter>
					<Routes>
						<Route path='/auth' element={<AuthPage />} />
					</Routes>
				</BrowserRouter>
			</main>
		</>
	)
}

export default App
