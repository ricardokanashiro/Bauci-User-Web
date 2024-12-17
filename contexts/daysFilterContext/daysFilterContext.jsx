import { createContext, useContext } from "react"

export const daysFilterContext = createContext()

export const useDaysFilterContext = () => {
   return useContext(daysFilterContext)
}