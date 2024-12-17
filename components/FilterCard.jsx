const FilterCard = ({ prazoMin, prazoMax, active, setFiltersSelected }) => {

   const estilo = "border-[.2rem] border-veryDarkBlue p-[.8rem] pt-[.4rem] pb-[.4rem] rounded-[2rem] flex gap-[1rem] justify-center items-center shrink-0"

   const switchFilter = (state, event) => {
      event.stopPropagation()
      setFiltersSelected(prev => prev.map(filter => filter.prazoMin === prazoMin ? { ...filter, active: state } : filter))
   }

   return (
      <button 
         className={active ? estilo + " bg-veryDarkBlue text-white" : estilo + " bg-transparent text-veryDarkBlue"} 
         onClick={(e) => switchFilter(true, e)}>

         <p className="text-[1.2rem]">{prazoMin}-{prazoMax} dias</p>

         {
            active && (
               <button onClick={(e) => switchFilter(false, e)}>
                  <img src="/x-icon.svg" alt="ícone de X" />
               </button>
            )
         }


      </button>
   )
}

export default FilterCard