import { useState } from "react"
import { daysFilterContext } from "./daysFilterContext"

const DaysFilterContextProvider = ({ children }) => {

   const [filtersSelected, setFiltersSelected] = useState([
      { prazoMin: 0, prazoMax: 1, active: false },
      { prazoMin: 2, prazoMax: 3, active: false },
      { prazoMin: 4, prazoMax: 5, active: false },
      { prazoMin: 6, prazoMax: 7, active: false },
      { prazoMin: 8, prazoMax: 9, active: false }
   ])

   return (
      <daysFilterContext.Provider value={{ filtersSelected, setFiltersSelected }}>
         { children }
      </daysFilterContext.Provider>
   )
}

export default DaysFilterContextProvider