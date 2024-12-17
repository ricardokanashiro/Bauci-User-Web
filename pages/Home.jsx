import { useState } from "react"

import FilterList from "../components/FilterList"
import HomeProdutoCard from "../components/HomeProdutoCard"

const Home = () => {

   const [searchValue, setSearchValue] = useState("")

   return (
      <div className="flex-1 p-[2rem]">

         <div className="flex justify-between items-center">

            <h1 className="font-bold text-[2.6rem]">Olá Ricardo</h1>

            <div className="bg-veryDarkBlue pt-[.6rem] pb-[.6rem] pr-[1rem] pl-[1rem] rounded-[.4rem]">
               <p className="text-white font-medium text-[1.2rem]">Cozinha</p>
            </div>

         </div>


         <div className="border-solid border-lightGray border-[.2rem] p-[.8rem] rounded-[.4rem] flex justify-center items-center mt-[2rem] gap-[1rem]">

            <input type="text" placeholder="Nome do produto" className="flex-1 text-[1.2rem] outline-none" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

            { searchValue && (
               <button onClick={() => setSearchValue("")}>
                  <img src="/x-icon gray.svg" alt="ícone de X" />
               </button>
            ) }

         </div>

         <FilterList />

         <div className="mt-[3rem]">

            <HomeProdutoCard 
               nome="Tomate"
               prazoMin={1}
               prazoMax={2}
               descricao="Tomate americano unidade"
               img="/Image Content.png"
            />

         </div>

      </div>
   )
}

export default Home