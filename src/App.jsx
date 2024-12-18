import Login from "@/pages/Login"
import Layout from "@/components/Layout"

import { useLoggedContext } from "@/contexts/loggedContext/loggedContext"

const App = () => {

   const { logged } = useLoggedContext()

   return (
      <>
         { logged ? <Layout /> : <Login /> }
         {/* <Layout /> */}
      </>
   )
}

export default App