import FilterCard from "./FilterCard"
import { useDaysFilterContext } from "../contexts/daysFilterContext/daysFilterContext"

const FilterList = () => {

   const { filtersSelected, setFiltersSelected } = useDaysFilterContext()

   return (
      <div className="flex overflow-scroll gap-[.4rem] mt-[1rem]">
         { 
            filtersSelected.map((filter, index) => (
               <FilterCard
                  prazoMin={filter.prazoMin} 
                  prazoMax={filter.prazoMax} 
                  active={filter.active} 
                  key={index} 
                  setFiltersSelected={setFiltersSelected} 
               />
            )) 
         }
      </div>
   )
}

export default FilterList