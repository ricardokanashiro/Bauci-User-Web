import Login from "@/pages/Login"
import Home from "@/pages/Home"

import { useLoggedContext } from "@/contexts/loggedContext/loggedContext"

const App = () => {

   const { logged } = useLoggedContext()

   return (
      <>
         { logged ? <Home /> : <Login /> }
      </>
   )
}

export default App