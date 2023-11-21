import './style.css'
import React from 'react';

const LoginScreen = () => {
  return (
    <div className="p-8 bg-gray-200 flex justify-center items-center flex-row space-x-20">
      <div label='left-login'>
        <h1 className="text-red-900 font-bold text-2xl pt-0 pl-4 pr-4 pb-4 border-t-4 border-red-900 rounded-xl bg-white flex">Deu Fome?<br/>Faça o login para salvar suas receitas favoritas!</h1>
      </div>
      
      <div label='right-login' className='flex'>
        <div label='login-div' className='bg-gray-100 rounded-xl p-4'>
          <h1 className='text-red-900 font-bold'>Login</h1>
          <div label='form-usuario'>
            <label htmlFor='usuario'>Usuário</label>
            <input type='text' name='usuario' placeholder="Digite seu usuário" className='rounded-xl shadow-lg p-1 m-2'/>
          </div>
          
          <div label='form-senha'>
            <label htmlFor='senha'>Senha</label>
            <input type='password' name='senha' placeholder="Digite sua senha" className='rounded-xl shadow-lg p-1 m-2'/>
          </div>
          
          <button className="text-white font-bold bg-red-900 px-3 py-1 rounded-xl">Login</button>
          {/* <img>scr="facebook-icon-logo-03865A9BA2-seeklogo.com.png"</img>
          <img>scr="google-37.png"</img>        */}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;