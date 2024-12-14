import { useState } from "react"
import { LoggedContext } from "./loggedContext"

const LoggedContextProvider = ({ children }) => {

   const [logged, setLogged] = useState(false)

   return (
      <LoggedContext.Provider value={{ logged, setLogged }}>
         { children }
      </LoggedContext.Provider>
   )
}

export default LoggedContextProvider