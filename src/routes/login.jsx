import {Link} from "react-router-dom";

export default function Login() {
    return (
     <body className='flex items-center h-screen w-screen justify-center  bg-transparent'>
       <div className="">
         <div className='bg-white shadow-md rounded-md p-4 space-y-4 w-80 px-10 py-10 pt-10 pb-10'>
         <div className="flex items-center justify-center">
           <img className="w-80" src="/src/assets/imagens/logo.png" alt="" />
          </div>
         <h2 className='font-bold text-2xl text-center mb-6 mt-6'>Entrar</h2>
           <div>
             <label className='block text-sm text-gray-800 mb-2 ' for="email">E-mail</label>
             <input className='transition duration-200 ease-in-out focus:outline-none w-full bg-gray-50 border border-gray-400 rounded px-2 py-1 mb-4 text-base text-gray-800 placeholder:text-gray-300' id='email' type="text" placeholder='Digite seu e-mail' />
           <div>
             <label className='block text-sm text-gray-800 mb-2' for="password">Senha</label>
             <input className='transition duration-200 ease-in-out focus:outline-none w-full bg-gray-50 border border-gray-400 rounded px-2 py-1 text-base text-gray-800 placeholder:text-gray-300' id='password' type="text" placeholder='Digite sua senha' />
           </div>
           <div>
           <Link to="/Home">
             <button className='w-full text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow text-white mt-8'>Logar</button>
            </Link>
           </div>
           </div>
         </div>
       </div>
     </body>
   );
 };