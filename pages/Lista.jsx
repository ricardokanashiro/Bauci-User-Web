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