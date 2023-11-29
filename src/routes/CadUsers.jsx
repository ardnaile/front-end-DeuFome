import React from 'react'
import NavBar from '../componentes/navbar'
import BackgroundLayout from '../estilos/VariosBackgrounds'
import Rodape from '../componentes/rodape'
import { useState } from 'react';

export default function CadUsers( onCadastro ) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmasenha, setConfirmasenha] = useState('');

    const handleCadastro = () => {
        onCadastro({ nome, email,senha,confirmasenha });
        setNome('');
        setEmail('');
        setSenha('');
        setConfirmasenha('');
      };   

    return (
        <div className='bg-transparent mx-auto w-screen h-screen' >
            <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/pizza.jpg')`}>
            <NavBar/>
            <div className='max-w-3xl mx-auto mt-8'>
                <form className='bg-transparent w-full mb-10'>
                    <div className='px-8 py-4'>
                        <label className='block text-red-900 font-paragrafos mb-2 text-4xl' >Nome</label>
                        <input 
                            onChange={(e) => setNome(e.target.value)}
                            className='bg-slate-400 w-full px-4 py-2 text-2xl rounded-md font-paragrafos' 
                            type="text" 
                            value={nome}
                            equired/>
                    </div>
                    <div className='px-8 py-4'>
                        <label className='block text-red-900 font-paragrafos mb-2 text-4xl' >E-mail</label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-slate-400 w-full px-4 py-2 text-2xl rounded-md font-paragrafos' 
                            type="e-mail" 
                            value={email}
                            required/>
                    </div>
                    <div className='px-8 py-4'>
                        <label className='block text-red-900 font-paragrafos mb-2 text-4xl' >Senha</label>
                        <input 
                            onChange={(e) => setSenha(e.target.value)}
                            className='bg-slate-400 w-full px-4 py-2 text-2xl rounded-md font-paragrafos' 
                            type="password" 
                            value={senha} 
                            required />
                    </div>
                    <div className='px-8 py-4'>
                        <label className='block text-red-900 font-paragrafos mb-2 text-4xl' >Confirme sua senha</label>
                        <input 
                            onChange={(e) => setConfirmasenha(e.target.value)}
                            className='bg-slate-400 w-full l px-4 py-2 text-2xl rounded-md font-paragrafos' 
                            type="password" 
                            value={confirmasenha} 
                            required />
                    </div>
                    <div className='px-8 py-4' >
                        <button
                            onClick={handleCadastro} 
                            className='bg-black rounded-md font-paragrafos px-4 py-2 text-2xl text-gray-300 hover:text-green-600'>Cadastrar</button>
                    </div> 
                </form> 
            </div>
            <Rodape/>
            </BackgroundLayout>
        </div>
  )
}
