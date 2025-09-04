import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { BasketProvider } from './components/context/BasketContext.jsx'
import { ToastContainer } from 'react-toastify'
import { FavoritesProvider } from './components/context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
    <FavoritesProvider>
        <BasketProvider>
            <BrowserRouter>
                <App />
                <ToastContainer position="top-right" autoClose={2000} />
            </BrowserRouter>
        </BasketProvider>
    </FavoritesProvider>


)
