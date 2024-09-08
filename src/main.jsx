import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouters from './Route'
import {NextUIProvider} from '@nextui-org/react'
import AuthContextProvider from './Context/AuthContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <AuthContextProvider>
      <AppRouters/>
      </AuthContextProvider>
    
    </NextUIProvider>
  
  </StrictMode>
)
