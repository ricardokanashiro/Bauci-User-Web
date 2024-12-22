import html2pdf from "html2pdf.js"
import moment from "moment"

import { logo } from "@/utils/bauciLogo64"

const generatePDF = async (productList) => {

   const loginDataItem = localStorage.getItem('loginData')
   const loginData = JSON.parse(loginDataItem)

   const currentDate = moment().format('DD/MM/YYYY')
   const currentTime = moment().format('HH:mm:ss')

   const htmlString = `
      <html style="width: 100dvw; height: 100dvh">
         <body style="display: flex; align-items: center; width: 100%; flex-direction: column;">
            <img src="${logo}" style="width: 170px; height: 170px; margin:auto" />

            <h1 style="text-align: center; font-size: 30px; font-weight: bold">PEDIDO DE COMPRA</h1>

            <p style="text-align: left; width: 750px; margin-top: 50px; font-size: 20px; margin-left: 100px"><b>Nome: </b> ${loginData.nome}</p>
            <p style="text-align: left; width: 750px; margin-top: 0px; font-size: 20px; margin-left: 100px"><b>Categoria: </b> ${loginData.categoria}</p>
            <p style="text-align: left; width: 750px; margin-top: 0px; font-size: 20px; margin-left: 100px"><b>Data: </b> ${currentDate}</p>
            <p style="text-align: left; width: 750px; margin-top: 0px; margin-bottom: 80px; font-size: 20px; margin-left: 100px"><b>Horário: </b> ${currentTime}</p>

            <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: auto;">
               <thead>
                  <tr>
                  <th style="border: 1px solid #dddddd; text-align: left; padding: 8px; background-color: #f2f2f2; font-size: 18px">Nome do Produto</th>
                  <th style="border: 1px solid #dddddd; text-align: left; padding: 8px; background-color: #f2f2f2; font-size: 18px">Quantidade</th>
                  </tr>
               </thead>
               <tbody>

                  ${productList.map(produto => (`
                     <tr>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px; font-size: 15px">${produto.nome}</td>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px; font-size: 15px">${produto.quantidade}</td>
                     </tr>
                  `))}

               </tbody>
            </table>

         </body>
      </html>
  `

   const pdfBlob = await html2pdf().from(htmlString).outputPdf("blob")

   const message = `
*PEDIDO DE COMPRA - Bauci System*

*Nome*: ${loginData.nome}
*Categoria*: ${loginData.categoria}
*Data*: ${currentDate}
*Horário*: ${currentTime}

*ITENS:*

${productList.map(product => `- ${product.nome}: ${product.quantidade} unidade(s)\n`).join('')}
`

   return { pdfBlob, message }
}

export default generatePDF