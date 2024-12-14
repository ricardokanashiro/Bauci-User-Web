import { createContext, useContext } from "react"

export const LoggedContext = createContext()

export const useLoggedContext = () => {
   return useContext(LoggedContext)
}