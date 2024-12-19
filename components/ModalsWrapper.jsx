import SelectProductModal from "./SelectProductModal"

import { useModalsContext } from "@/contexts/modalsContext/modalsContext"

const ModalsWrapper = () => {

   const { selectProductModalActive } = useModalsContext()

   return (
      <div className="w-[100dvw] h-[100dvh] bg-[#00000066] absolute top-0 left-0 flex justify-center items-end">
         { selectProductModalActive && <SelectProductModal /> }
      </div>
   )
}

export default ModalsWrapper