import { useModalsContext } from "@/contexts/modalsContext/modalsContext"
import { useProductsSelectedContext } from "@/contexts/productsSelectedContext/productsSelectedContext"

const HomeProdutoCard = ({ nome, prazoMin, prazoMax, descricao, img }) => {

   const { toggleSelectProductModal } = useModalsContext()
   const { setProductSelected } = useProductsSelectedContext()

   function handleSelectProduct() {

      setProductSelected({ nome, prazoMax, prazoMin, img })
      toggleSelectProductModal()
   }

   return (
      <div className="w-full h-[15rem] flex border-[.2rem] border-veryDarkBlue rounded-[1rem] shrink-0">

         <img src={img} alt="produto image" className="w-[12rem] object-cover rounded-[1rem]" />

         <div className="p-[1rem] flex flex-col justify-between flex-1">

            <div>

               <h2 className="text-[1.6rem] font-bold break-all leading-[1.6rem]">{nome}</h2>

               <p className="text-[#717D96] text-[1rem] mt-[1rem] mb-[.2rem]"> 
                  <span className="font-bold">Prazo</span>: {prazoMin}-{prazoMax} dias
               </p>

               <p className="text-[#717D96] text-[.9rem] break-all">{descricao}</p>

            </div>

            <button 
               className="bg-veryDarkBlue text-white w-full p-[.8rem] rounded-[.4rem] font-bold"
               onClick={handleSelectProduct}
            >
               Adicionar a Lista
            </button>

         </div>

      </div>
   )
}

export default HomeProdutoCard