import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ToastContainer } from 'react-toastify'

import App from './App.jsx'

import LoggedContextProvider from "@/contexts/loggedContext/loggedContextProvider"
import DaysFilterContextProvider from '@/contexts/daysFilterContext/daysFilterContextProvider.jsx'
import ModalsContextProvider from '@/contexts/modalsContext/modalsContextProvider.jsx'
import ProductsSelectedContextProvider from "@/contexts/productsSelectedContext/productsSelectedContextProvider"
import SectionSelectedContextProvider from "@/contexts/sectionSelectedContext/sectionSelectedContextProvider"

import './index.css'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <LoggedContextProvider>
      <DaysFilterContextProvider>
      <ModalsContextProvider>
      <ProductsSelectedContextProvider>
      <SectionSelectedContextProvider>
         <App />
         <ToastContainer />
      </SectionSelectedContextProvider>
      </ProductsSelectedContextProvider>
      </ModalsContextProvider>
      </DaysFilterContextProvider>
      </LoggedContextProvider>
   </StrictMode>,
)
