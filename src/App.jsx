import Login from "@/pages/Login"

import { useLoggedContext } from "@/contexts/loggedContext/loggedContext"

const App = () => {

   const { logged } = useLoggedContext()

   return (
      <>
         { logged ? <h1>Logado mano!</h1> : (<Login />) }
      </>
   )
}

export default App