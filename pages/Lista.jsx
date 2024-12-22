import ListProdutoCard from "../components/ListProdutoCard"
import SendListButton from "../components/SendListButton"

import { useProductsSelectedContext } from "../contexts/productsSelectedContext/productsSelectedContext"

const Lista = () => {

   const { productsSelectedList, setProductsSelectedList } = useProductsSelectedContext()

   return (
      <div className="flex-1 pt-[2rem] pr-[2rem] pl-[2rem] flex flex-col overflow-hidden">

         <h1 className="font-bold text-[3rem]">Lista</h1>

         <div className="w-full mt-[3rem] flex flex-col gap-[1.5rem] flex-1 overflow-auto">

            {
               productsSelectedList.length === 0 && (
                  <div className="flex flex-col justify-center items-center flex-1">
                     <img src="/list-placeholder.svg" alt="list placeholder" className="w-[20rem]" />
                     <p className="text-[1.3rem] font-bold text-veryDarkBlue">Nenhum item adicionado</p>
                  </div>
               )
            }

            {
               productsSelectedList.map((product, index) => (

                  <ListProdutoCard 
                     key={index}
                     setProductsSelectedList={setProductsSelectedList} 
                     nome={product.nome}
                     prazoMin={product.prazoMin}
                     prazoMax={product.prazoMax}
                     imagem={product.img}
                     quantidade={product.quantidade}
                  />

               ))
            }

         </div>

         <SendListButton />

      </div>
   )
}

export default Lista