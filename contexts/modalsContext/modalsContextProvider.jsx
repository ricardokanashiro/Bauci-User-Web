import { useState } from "react"

import { ModalsContext } from "./modalsContext"

const ModalsContextProvider = ({ children }) => {

   const [selectProductModalActive, setSelectProductModalActive] = useState(false)
   const [modalsWrapperActive, setModalsWrapperActive] = useState(false)

   function toggleSelectProductModal() {
      setSelectProductModalActive(prev => !prev)
      setModalsWrapperActive(prev => !prev)
   }

   return (
      <ModalsContext.Provider value={{ 
         selectProductModalActive, toggleSelectProductModal,
         modalsWrapperActive
      }}>
         { children }
      </ModalsContext.Provider>
   )
}

export default ModalsContextProvider