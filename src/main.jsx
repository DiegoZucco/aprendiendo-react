import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CarritoProvider } from './Context/CarritoContext.jsx';
import {UserProvider} from './Context/UserContext.jsx';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <UserProvider> 
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
