import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import LoggedContextProvider from "@/contexts/loggedContext/loggedContextProvider"

import './index.css'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <LoggedContextProvider>
         <App />
      </LoggedContextProvider>
   </StrictMode>,
)
