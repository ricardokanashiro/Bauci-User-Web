import Home from "@/pages/Home"
import Lista from "@/pages/Lista"
import Usuario from "@/pages/Usuario"
import ModalsWrapper from "@/components/ModalsWrapper"

import { useModalsContext } from "@/contexts/modalsContext/modalsContext"
import { useSectionSelectedContext } from "@/contexts/sectionSelectedContext/sectionSelectedContext" 

const estilos = {
   menuBtn: "h-full flex-1 flex justify-center items-center flex-col gap-[.2rem]",
   menuBtnText: "font-medium text-[1.2rem]"
}

const Layout = () => {

   const { sectionSelected, setSectionSelected } = useSectionSelectedContext()

   const { modalsWrapperActive } = useModalsContext()

   return (
      <div className="flex flex-col w-full h-full max-h-[100dvh]">

         { sectionSelected === "home" && <Home /> }
         { sectionSelected === "lista" && <Lista /> }
         { sectionSelected === "usuario" && <Usuario /> }

         { modalsWrapperActive && <ModalsWrapper /> }

         <div className="border-t-[.2rem] border-veryDarkBlue h-[6rem] flex">

            <button className={estilos.menuBtn} onClick={() => setSectionSelected("home")}>

               <img src={sectionSelected === "home" ? "/home-icon.svg" : "/home-icon-disabled.svg"} alt="ícone de casa" />

               <p 
                  className={sectionSelected === "home" 
                     ? estilos.menuBtnText + " text-veryDarkBlue"
                     : estilos.menuBtnText + " text-[#C0C0C0]"
                  }
               >
                  Home
               </p>

            </button>

            <button className={estilos.menuBtn} onClick={() => setSectionSelected("lista")}>

               <img src={sectionSelected === "lista" ? "/list-icon.svg" : "/list-icon-disabled.svg"} alt="ícone de lista" />

               <p 
                  className={sectionSelected === "lista" 
                     ? estilos.menuBtnText 
                     : estilos.menuBtnText + " text-[#C0C0C0]"
                  }
               >
                  Lista
               </p>

            </button>

            <button className={estilos.menuBtn} onClick={() => setSectionSelected("usuario")}>

               <img src={sectionSelected === "usuario" ? "/user-icon.svg" : "/user-Icon-disabled.svg"} alt="ícone de usuario" />

               <p 
                  className={sectionSelected === "usuario" 
                     ? estilos.menuBtnText 
                     : estilos.menuBtnText + " text-[#C0C0C0]"
                  }
               >
                  Usuário
               </p>
            </button>

         </div>
         
      </div>
   )
}

export default Layout