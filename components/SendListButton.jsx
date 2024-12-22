import moment from "moment"

import generatePDF from "../utils/generatePDF"
import { notifyError } from "../utils/notify"

import { useProductsSelectedContext } from "@/contexts/productsSelectedContext/productsSelectedContext"

const SendListButton = () => {

   const { productsSelectedList } = useProductsSelectedContext()

   const loginDataItem = localStorage.getItem('loginData')
   const loginData = JSON.parse(loginDataItem)
   
   async function sendToWhatsapp() {

      if(productsSelectedList.length === 0) {
         notifyError("Lista vazia!")
         return
      }

      const time = moment().format("DD-MM-YYYY")

      const { pdfBlob, message } = await generatePDF(productsSelectedList)

      const PDFUrl = URL.createObjectURL(pdfBlob)

      const link = document.createElement('a')
      link.href = PDFUrl
      link.download = `pedido-compra-${loginData.nome}-${time}.pdf`

      link.click()
      URL.revokeObjectURL(PDFUrl)

      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`

      window.open(whatsappUrl, "_blank")
   }

   return (
      <button
         className="bg-veryDarkBlue text-white w-full p-[.8rem] 
         rounded-[.4rem] font-bold text-[1.4rem] mt-[1.5rem] mb-[1.5rem]"
         onClick={sendToWhatsapp}
      >
         Finalizar Lista
      </button>
   )
}

export default SendListButton