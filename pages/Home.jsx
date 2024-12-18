import { useEffect, useState } from "react"

import FilterList from "../components/FilterList"
import HomeProdutoList from "../components/HomeProdutoList"

const Home = () => {

   const [searchValue, setSearchValue] = useState("")
   const [productsList, setProductsList] = useState([])

   async function fetchDataFunc() {

      const loginData = localStorage.getItem('loginData')
      const { token } = JSON.parse(loginData)

      if (token) {
         try {
            const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/produto/${JSON.parse(loginData).categoriaID}`, {
               method: "GET",
               headers: {
                  'Authorization': `Bearer ${token}`,
               },
            })

            const fetchedData = await response.json()

            setProductsList(fetchedData)
         }
         catch (error) {
            console.log("erro: " + error.message)
         }
      }
   }

   useEffect(() => {
      fetchDataFunc()
   }, [])

   return (
      <div className="flex-1 pt-[2rem] pr-[2rem] pl-[2rem] flex flex-col overflow-hidden">

         <div className="flex justify-between items-center">

            <h1 className="font-bold text-[2.6rem]">Olá Ricardo</h1>

            <div className="bg-veryDarkBlue pt-[.6rem] pb-[.6rem] pr-[1rem] pl-[1rem] rounded-[.4rem]">
               <p className="text-white font-medium text-[1.2rem]">Cozinha</p>
            </div>

         </div>

         <div className="flex gap-[1rem] mt-[2rem]">

            <div className="border-solid border-lightGray border-[.2rem] p-[.8rem] rounded-[.4rem] flex justify-center items-center gap-[1rem] flex-1">

               <input type="text" placeholder="Nome do produto" className="flex-1 text-[1.2rem] outline-none bg-transparent" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

               {searchValue && (
                  <button onClick={() => setSearchValue("")}>
                     <img src="/x-icon gray.svg" alt="ícone de X" />
                  </button>
               )}

            </div>

            <button className="bg-veryDarkBlue w-[4rem] flex justify-center items-center rounded-[.4rem]" onClick={fetchDataFunc}>
               <img src="/icon-reload-white.svg" alt="reload icon" className="w-[1.6rem]" />
            </button>

         </div>

         <FilterList />
         <HomeProdutoList productsList={productsList} searchValue={searchValue} />

      </div>
   )
}

export default Home