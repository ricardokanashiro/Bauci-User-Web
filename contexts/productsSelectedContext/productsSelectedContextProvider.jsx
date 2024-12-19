import { useState } from "react"
import { ProductsSelectedContext } from "./productsSelectedContext"

const ProductsSelectedContextProvider = ({ children }) => {
   
   const [productsSelectedList, setProductsSelectedList] = useState([])
   const [productSelected, setProductSelected] = useState({})

   return (
      <ProductsSelectedContext.Provider value={{
         productsSelectedList, setProductsSelectedList,
         productSelected, setProductSelected
      }}>
         { children }
      </ProductsSelectedContext.Provider>
   )
}

export default ProductsSelectedContextProvider