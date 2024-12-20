const ListProdutoCard = ({ nome, prazoMin, prazoMax, imagem, quantidade, setProductsSelectedList }) => {

   function handleSetProductQuantidade(operation) {

      if(operation === "increase") {

         setProductsSelectedList(prev => prev.map(product => 
            product.nome === nome ? { ...product, quantidade: product.quantidade + 1 } : product
         ))

         return
      }

      if(operation === "decrease") {
         
         if(quantidade === 1) {

            setProductsSelectedList(prev => prev.filter(product => product.nome !== nome))
            return
         }

         setProductsSelectedList(prev => prev.map(product => 
            product.nome === nome ? { ...product, quantidade: product.quantidade - 1 } : product
         ))
      }
   }

   return (
      <div className="w-full h-[12rem] border-veryDarkBlue border-solid border-[.25rem] rounded-[.4rem] flex gap-[1rem]">

         <img src={imagem} alt="imagem do produto" className="w-[12rem] h-full object-cover"  />

         <div className="p-[1rem] flex-1 flex flex-col justify-between">

            <div>

               <h2 className="text-[1.6rem] font-bold break-all text-veryDarkBlue">{nome}</h2>

               <p className="text-[1.1rem] text-[#717D96]"> 
                  <span className="font-semibold">Prazo</span>: {prazoMin}-{prazoMax} dias 
               </p>

            </div>

            <div className="w-full flex justify-end">

               <div className="bg-[#EDF0F7] flex w-[7.5rem] h-[3rem] rounded-[.2rem]">

                  <button onClick={() => handleSetProductQuantidade("decrease")} className="h-[3rem] w-[2.5rem] flex justify-center items-center">
                     <img src="/minus-Icon.svg" alt="minus icon" />
                  </button>

                  <p className="h-[3rem] w-[2.5rem] flex justify-center items-center text-[1.3rem] font-semibold">{quantidade}</p>

                  <button onClick={() => handleSetProductQuantidade("increase")} className="h-[3rem] w-[2.5rem] flex justify-center items-center">
                     <img src="/plus-icon.svg" alt="plus icon" />
                  </button>

               </div>

            </div>

         </div>

      </div>
   )
}

export default ListProdutoCard