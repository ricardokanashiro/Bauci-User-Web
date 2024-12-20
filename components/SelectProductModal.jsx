import { useState } from "react"

import { useModalsContext } from "@/contexts/modalsContext/modalsContext"
import { useProductsSelectedContext } from "@/contexts/productsSelectedContext/productsSelectedContext"
import { useSectionSelectedContext } from "@/contexts/sectionSelectedContext/sectionSelectedContext" 

const SelectProductModal = () => {

   const [productNum, setProductNum] = useState(1)

   const { toggleSelectProductModal } = useModalsContext()
   const { productSelected, setProductsSelectedList, productsSelectedList } = useProductsSelectedContext()
   const { setSectionSelected } = useSectionSelectedContext()

   function handleAddProductsSelectedList() {

      const existentProduct = productsSelectedList.find(p => p.nome === productSelected.nome)

      if(!existentProduct) {

         setProductsSelectedList(prev => [...prev, {
               nome: productSelected.nome, 
               prazoMin: productSelected.prazoMin,
               prazoMax: productSelected.prazoMax,
               img: productSelected.img,
               quantidade: productNum
         }])

         toggleSelectProductModal()
         setSectionSelected("lista")

         return
      }

      setProductsSelectedList(prev => prev.map(product => 
         product.nome === productSelected.nome ? {...product, quantidade: productNum} : product
      ))

      toggleSelectProductModal()
      setSectionSelected("lista")
   }

   function changeProductNum(operation) {

      if(operation === "decrease") {

         if(productNum === 1) {
            return
         }

         setProductNum(prev => prev - 1)
      }
      
      if(operation === "increase") {
         setProductNum(prev => prev + 1)
      }
   }

   return (
      <div className="w-full h-[28rem] bg-white p-[2rem] flex flex-col">
         
         <div className="w-full flex justify-end items-center">
            <button onClick={toggleSelectProductModal}>
               <img src="/x-icon gray.svg" alt="ícone de X" className="w-[1.8rem]" />
            </button>
         </div>

         <div className="flex-1 flex flex-col justify-between">

            <div className="mt-[2rem] flex gap-[2rem]">

               <img src={productSelected.img} alt="" className="w-[12rem] h-[12rem] object-cover" />

               <div className="flex flex-col flex-1 justify-between">

                  <div>

                     <h2 className="text-[1.6rem] leading-[1.6rem] font-bold">{productSelected.nome}</h2>

                     <p className="text-[#717D96] mt-[1rem] text-[1.2rem]"> 
                        <span className="font-bold">Prazo</span>: {productSelected.prazoMin}-{productSelected.prazoMax} dias 
                     </p>

                  </div>

                  <div className="w-full flex justify-end">

                     <div className="bg-[#EDF0F7] flex w-[7.5rem] h-[3rem] rounded-[.2rem]">

                        <button className="h-[3rem] w-[2.5rem] flex justify-center items-center" onClick={() => changeProductNum('decrease')}>
                           <img src="/minus-Icon.svg" alt="" />
                        </button>   

                        <p className="h-[3rem] w-[2.5rem] flex justify-center items-center text-[1.3rem] font-semibold">
                           { productNum }
                        </p>

                        <button className="h-[3rem] w-[2.5rem] flex justify-center items-center" onClick={() => changeProductNum('increase')}>
                           <img src="/plus-icon.svg" alt="" />
                        </button>

                     </div>

                  </div>
                  

               </div>

            </div>

            <button 
               className="bg-veryDarkBlue text-white w-full font-semibold text-[1.4rem] p-[1rem] rounded-[.4rem]"
               onClick={handleAddProductsSelectedList}
            >
               Adicionar a Lista
            </button>

         </div>


      </div>
   )
}

export default SelectProductModal