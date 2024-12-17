import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import LoggedContextProvider from "@/contexts/loggedContext/loggedContextProvider"
import DaysFilterContextProvider from '../contexts/daysFilterContext/daysFilterContextProvider.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <LoggedContextProvider>
      <DaysFilterContextProvider>
         <App />
      </DaysFilterContextProvider>
      </LoggedContextProvider>
   </StrictMode>,
)
