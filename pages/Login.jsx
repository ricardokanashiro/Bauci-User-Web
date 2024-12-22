import { useState } from "react"

import { useLoggedContext } from "@/contexts/loggedContext/loggedContext"

const Login = () => {

   const [loginCredentials, setLoginCredentials] = useState({ login: '', senha: '' })
   const [thereIsError, setThereIsError] = useState(false)
   const { setLogged } = useLoggedContext()

   const estilos = {
      label: "text-veryDarkBlue font-semibold text-[12px]",
      input: "block border-lightGray border-[.15rem] border-solid w-full rounded-[.6rem] p-[.8rem] mt-[.6rem] outline-none",
      errorMessage: "font-semibold text-red-500"
   }

   async function logIn() {

      try 
      {
         const response = await fetch(import.meta.env.VITE_API_DOMAIN + '/usuario/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               login: loginCredentials.login,
               senha: loginCredentials.senha
            })
         })

         const loginData = await response.json()

         if(response.ok) {
            localStorage.setItem('loginData', JSON.stringify(loginData))
            setLogged(true)
            setThereIsError(false)

            return
         }

         setThereIsError(true)

      }
      catch (error) {
         console.log(error)
      }

   }

   return (
      <div className="flex flex-col items-center bg-veryDarkBlue w-full h-full">

         <div className="flex-1 flex justify-center items-center">
            <img src="/bauci-logo.svg" alt="bauci logo" />
         </div>

         <form 
            className="w-full h-[300px] bg-white p-[25px] rounded-tl-[8px] rounded-tr-[8px] flex flex-col justify-between" 
            onSubmit={(e) => e.preventDefault()}
         >

            <div>

               <h1 className="text-[2.4rem] font-bold">Bem Vindo</h1>

               <fieldset className="mt-[2rem]">

                  <label htmlFor="loginInput" className={estilos.label}>Login</label>

                  <input
                     type="text" 
                     placeholder="Insira seu login" 
                     id="loginInput"
                     onChange={(e) => setLoginCredentials(prev => ({...prev, login: e.target.value}))}
                     className={thereIsError ? estilos.input + " border-red-500" : estilos.input}
                  />

                  { thereIsError && <p className={estilos.errorMessage}>Login Inválido!</p> }

               </fieldset>

               <fieldset className="mt-[1rem]">

                  <label htmlFor="senhaInput" className="text-veryDarkBlue font-semibold text-[12px]">Senha</label>

                  <input 
                     type="password" 
                     placeholder="Insira sua senha" 
                     id="senhaInput"
                     onChange={(e) => setLoginCredentials(prev => ({...prev, senha: e.target.value}))}
                     className={thereIsError ? estilos.input + " border-red-500" : estilos.input}
                  />

                  { thereIsError && <p className={estilos.errorMessage}>Senha Inválida!</p> }

               </fieldset>
               
            </div>

            <button 
               type="submit" 
               onClick={logIn} 
               className="bg-veryDarkBlue text-white font-bold w-full text-[1.3rem] p-[1rem] rounded-[.6rem]"
            >Entrar</button>

         </form>

      </div>
   )
}

export default Login