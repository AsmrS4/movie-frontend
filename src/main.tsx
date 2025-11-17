import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import '@app/index.css'
import App from '@app/App.tsx'
import { setupStore } from '@shared/store/store.ts'

createRoot(document.getElementById('root')!).render(
	<Provider store={setupStore()}>
		<App />
	</Provider>
)
