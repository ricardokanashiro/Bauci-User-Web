import { useContext } from "react"
import { createContext } from "react"

export const ProductsSelectedContext = createContext()

export const useProductsSelectedContext = () => {
   return useContext(ProductsSelectedContext)
}