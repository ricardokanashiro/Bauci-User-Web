import { useSectionSelectedContext } from "@/contexts/sectionSelectedContext/sectionSelectedContext"
import { useLoggedContext } from "../contexts/loggedContext/loggedContext"

const Usuario = () => {

   const { setSectionSelected } = useSectionSelectedContext()
   const { setLogged } = useLoggedContext()

   function exit() {
      localStorage.clear()
      setSectionSelected("home")
      setLogged(false)
   }

   return (
      <div className="flex-1 pt-[2rem] pr-[2rem] pl-[2rem]">

         <h1 className="font-bold text-[3rem]">Usuário</h1>

         <h3 className="mt-[3rem] text-[2.2rem] font-bold">Gabriella Mélo</h3>
         <p className="text-[1.25em]">@loginexemplo</p>

         <button className="bg-veryDarkBlue flex p-[1rem] justify-center items-center rounded-[.4rem] mt-[2rem]" onClick={exit}>
            <p className="text-white text-[1.4rem] font-bold">Sair</p>
            <img src="/icon-exit.svg" alt="exit icon" />
         </button>

      </div>
   )
}

export default Usuario