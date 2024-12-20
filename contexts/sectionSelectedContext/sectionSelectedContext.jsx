import { createContext, useContext } from "react"

export const SectionSelectedContext = createContext()

export const useSectionSelectedContext = () => {
   return useContext(SectionSelectedContext)
}