import { useState } from "react"

import { useLoggedContext } from "@/contexts/loggedContext/loggedContext"

import "@/styles/login-page.css"

const Login = () => {

   const [loginCredentials, setLoginCredentials] = useState({ login: '', senha: '' })
   const { setLogged } = useLoggedContext()

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
         }

      }
      catch (error) {
         console.log(error)
      }

   }

   return (
      <div className="login-page">

         <div className="login-page__logo-wrapper">
            <img src="/bauci-logo.svg" alt="bauci logo" />
         </div>

         <form className="login-page__credentials-area" onSubmit={(e) => e.preventDefault()}>

            <div className="credentials-area__input-area">

               <h1>Bem Vindo</h1>

               <fieldset>

                  <label htmlFor="loginInput">Login</label>

                  <input 
                     type="text" 
                     placeholder="Insira seu login" 
                     id="loginInput"
                     onChange={(e) => setLoginCredentials(prev => ({...prev, login: e.target.value}))}
                  />

               </fieldset>

               <fieldset>

                  <label htmlFor="senhaInput">Senha</label>

                  <input 
                     type="password" 
                     placeholder="Insira sua senha" 
                     id="senhaInput"
                     onChange={(e) => setLoginCredentials(prev => ({...prev, senha: e.target.value}))} 
                  />

               </fieldset>
               
            </div>

            <button type="submit" onClick={logIn}>Entrar</button>

         </form>

      </div>
   )
}

export default Login