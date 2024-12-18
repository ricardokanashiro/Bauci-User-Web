import HomeProdutoCard from "@/components/HomeProdutoCard"

import { useDaysFilterContext } from "@/contexts/daysFilterContext/daysFilterContext"

const HomeProdutoList = ({ productsList, searchValue }) => {

   const { filtersSelected } = useDaysFilterContext()

   return (
      <div className="mt-[3rem] flex-1 overflow-auto flex flex-col gap-[1rem] pb-[2rem]">

         {
            searchValue !== "" ?

               filtersSelected.find(prazo => prazo.active) ?

                  productsList.filter(produto =>
                     filtersSelected.find(prazo =>
                        (prazo.prazoMax === produto.prazomaximo || prazo.prazoMax === produto.prazominimo || prazo.prazoMin === produto.prazomaximo || prazo.prazoMin === produto.prazominimo) && prazo.active && produto.nome.includes(searchValue)
                     ))
                     .map((produto) =>
                        <HomeProdutoCard
                           nome={produto.nome}
                           descricao={produto.descricao}
                           prazoMin={produto.prazominimo}
                           prazoMax={produto.prazomaximo}
                           img={produto.imagem}
                           key={produto.produtoid}
                        />
                     )

                  :

                  productsList.filter(produto => produto.nome.toUpperCase().includes(searchValue.toUpperCase())).map((produto, index) => produto.nome.toUpperCase().includes(searchValue.toUpperCase()) && (
                     <HomeProdutoCard
                        nome={produto.nome}
                        descricao={produto.descricao}
                        prazoMin={produto.prazominimo}
                        prazoMax={produto.prazomaximo}
                        img={produto.imagem}
                        id={produto.produtoid}
                        key={produto.produtoid}
                     />
                  ))

            :

            filtersSelected.find(prazo => prazo.active) ?

               productsList.filter(produto => filtersSelected.find(prazo => (prazo.prazoMax === produto.prazomaximo || prazo.prazoMax === produto.prazominimo || prazo.prazoMin === produto.prazomaximo || prazo.prazoMin === produto.prazominimo) && prazo.active)).map((produto) =>

                  <HomeProdutoCard
                     nome={produto.nome}
                     descricao={produto.descricao}
                     prazoMin={produto.prazominimo}
                     prazoMax={produto.prazomaximo}
                     img={produto.imagem}
                     id={produto.produtoid}
                     key={produto.produtoid}
                  />

               )

               :

               productsList.map((produto) => (
                  <HomeProdutoCard
                     nome={produto.nome}
                     descricao={produto.descricao}
                     prazoMin={produto.prazominimo}
                     prazoMax={produto.prazomaximo}
                     img={produto.imagem}
                     key={produto.produtoid}
                  />
               ))
         }

      </div>
   )
}

export default HomeProdutoList