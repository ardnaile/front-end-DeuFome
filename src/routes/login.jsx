import {Link, Outlet} from "react-router-dom";
import Rodape from "../componentes/rodape";

export default function Login() {
    return (
     <body>
      <div className="bg-white w-screen mx-auto px-6 py-6 flex items-center justify-center">
        <img className="w-24 items-center" src="/src/assets/imagens/logo.svg" alt="" />
      </div>
      <form className="w-300 mx-auto flex items-center h-screen w-screen justify-center bg-transparent" >
       <div className="bg-white shadow-md rounded-2xl w-80 px-10 py-10 pt-10 pb-10">
        <h2 className='font-bold text-4xl text-center mb-6 '>Entrar</h2>
        <div className="flex flex-col items-center">
          <button className="bg-blue-600 hover:bg-blue-800 rounded-2xl w-full text-white px-4 pt-2 py-2 mb-4">Entrar com o facebook</button>
          <button className="bg-red-500 hover:bg-red-600 rounded-2xl w-full text-white px-4 pt-2 py-2 mb-4">Entrar com o gmail</button>
          <div className="items-center w-full text-center mb-4">
            <div className="border-t-2 pt-1"></div>
              <h3 className="font-bold">ou</h3>
            <div className="border-b-2 py-1"></div>
          </div>
        </div>
        <div>
             <label className='block text-sm font-bold text-gray-800 mb-2 ' for="email">E-mail</label>
             <input className='block transition duration-200 ease-in-out focus:outline-none w-full bg-gray-50 border border-gray-800 rounded px-2 py-1 mb-4 text-base text-gray-800 placeholder:text-gray-300' id='email' type="text" placeholder='Digite seu e-mail' />
        </div>
        <div>
             <label className='block text-sm font-bold text-gray-800 mb-2' for="password">Senha</label>
             <input className='block transition duration-200 ease-in-out focus:outline-none w-full bg-gray-50 border border-gray-800 rounded px-2 py-1 text-base text-gray-800 placeholder:text-gray-300' id='password' type="password" placeholder='Digite sua senha' />
        </div>
        <div className="flex items-center justify-end mt-2">
          <ul className="text-right text-blue-900 hover:font-semibold  cursor-pointer">
            esqueceu sua senha?
          </ul>
        </div>
        <div>
            <Link to="/Home">
              <button className='w-full text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow text-white mt-8'>Logar</button>
            </Link>
            <div className="flex mt-3">
              <ul className="mr-1 ">
                é novo por aqui?
              </ul>
              <ul className="text-orange-400  hover:font-semibold cursor-pointer">
                Cadastre-se.
              </ul>
            </div>
        </div>
       </div>
       </form>
       <Outlet/>
       <Rodape/>
     </body>
   );
 };