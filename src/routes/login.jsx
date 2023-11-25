import {Link} from "react-router-dom";
import Rodape from "../componentes/rodape";
import BackgroundLayout from "../estilos/VariosBackgrounds";

import { useState } from 'react';


export default function Login() {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      
      // Usuário fictício para validação
      const fictitiousUser = {
        username: 'rafael.carvalho@gmail.com',
        password: 'senhateste',
      };
  
      // Validar as credenciais
      if (username === fictitiousUser.username && password === fictitiousUser.password) {
        alert('Login bem-sucedido!');
        // Faça o que for necessário após o login bem-sucedido
      } else {
        alert('Credenciais inválidas. Tente novamente.');
        e.preventDefault();
      }
    };
    
  return (
      <div>
        <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/pizza.jpg')`}>
      <div className="bg-white w-screen mx-auto px-6 py-6 flex items-center justify-center">
        <img className="w-24 items-center" src="/src/assets/imagens/icones/logo.svg" alt="" />
      </div>
      <form onSubmit={handleSubmit} className="w-300 mx-auto flex items-center h-screen w-screen justify-center bg-transparent" >
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
             <input name="nome" value={username} onChange={handleUsernameChange} className='block transition duration-200 ease-in-out focus:outline-none w-full bg-gray-50 border border-gray-800 rounded px-2 py-1 mb-4 text-base text-gray-800 placeholder:text-gray-300'  type="e-mail" placeholder='Digite seu e-mail' />
        </div>
        <div>
             <label className='block text-sm font-bold text-gray-800 mb-2' for="password">Senha</label>
             <input value={password} onChange={handlePasswordChange} className='block transition duration-200 ease-in-out focus:outline-none w-full bg-gray-50 border border-gray-800 rounded px-2 py-1 text-base text-gray-800 placeholder:text-gray-300'  type="password" placeholder='Digite sua senha' />
        </div>
        <div className="flex items-center justify-end mt-2">
          <ul className="text-right text-blue-900 hover:font-semibold  cursor-pointer">
            esqueceu sua senha?
          </ul>
        </div>
        <div>
            <Link to="/Home">
              <button type="submit" onClick={handleSubmit} className='w-full text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow text-white mt-8'>Logar</button>
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
       <Rodape/>
       </BackgroundLayout>
       </div>
   );
 };