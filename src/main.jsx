import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import LoggedContextProvider from "@/contexts/loggedContext/loggedContextProvider"
import DaysFilterContextProvider from '@/contexts/daysFilterContext/daysFilterContextProvider.jsx'
import ModalsContextProvider from '@/contexts/modalsContext/modalsContextProvider.jsx'
import ProductsSelectedContextProvider from "@/contexts/productsSelectedContext/productsSelectedContextProvider"

import './index.css'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <LoggedContextProvider>
      <DaysFilterContextProvider>
      <ModalsContextProvider>
      <ProductsSelectedContextProvider>
         <App />
      </ProductsSelectedContextProvider>
      </ModalsContextProvider>
      </DaysFilterContextProvider>
      </LoggedContextProvider>
   </StrictMode>,
)
