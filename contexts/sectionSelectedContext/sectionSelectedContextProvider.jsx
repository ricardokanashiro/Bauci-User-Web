import { useState } from "react"

import { SectionSelectedContext } from "./sectionSelectedContext"

const SectionSelectedContextProvider = ({ children }) => {

   const [sectionSelected, setSectionSelected] = useState("home")

   return (
      <SectionSelectedContext.Provider value={{ sectionSelected, setSectionSelected }}>
         { children }
      </SectionSelectedContext.Provider>
   )
}

export default SectionSelectedContextProvider