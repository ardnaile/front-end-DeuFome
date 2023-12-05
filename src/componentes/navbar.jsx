import { Link } from "react-router-dom"
import { useState } from 'react';

export default function NavBar({ onPesquisar }) {
    const [pesquisaValue, setPesquisaValue] = useState('');

    const handlePesquisaChange = (event) => {
        setPesquisaValue(event.target.value);
        // Chame a função de pesquisa passando o valor da barra de pesquisa
        onPesquisar(event.target.value);
    }

    return (
     <nav className='relative'>
        <div className='w-screen mx-auto px-3 py-4 font-extra lights shadow-3xl  bg-white flex  items-center '>
            <img className='w-36 p-3 cursor-pointer' src="/src/assets/imagens/icones/logo.svg" alt=""/>
            <Link to="/Home">
                <ul className="mr-4 cursor-pointer text-xl hover:text-red-900 hover:font-semibold" >Home</ul>
            </Link>
            <Link to="/Categorias">
                <ul className="mr-4 cursor-pointer text-xl hover:text-red-900 hover:font-semibold">Categorias</ul>
            </Link>
            <Link to="/CadReceita">
                <ul className="mr-4 cursor-pointer text-xl hover:text-red-900 hover:font-semibold">Montar receita</ul>
            </Link>
            <Link to="/Receitas-lista">
                <ul className="mr-4 cursor-pointer text-xl hover:text-red-900 hover:font-semibold">Minhas Receitas</ul> 
            </Link>
            <div className="mx-auto flex items-center justify-center">
            <input
                    className="px-2 py-2 text-2xl rounded-2xl transition duration-200 ease-in-out focus:outline-none bg-gray-50 border border-gray-800 w-96"
                    type="text"
                    placeholder="Pesquisar receitas"
                    value={pesquisaValue}
                    onChange={handlePesquisaChange}
                />
                <img className="w-12 mr-16" src="/src/assets/imagens/icones/search.svg" alt="" />
            </div>

            <div className="flex justify-end items-center px-6">
                <Link to="/Perfil">
                    <ul className="mr-4 cursor-pointer  text-xl hover:text-red-900 hover:font-semibold">Usuário</ul>
                </Link>
                <Link to="/login">
                    <img className='w-14 cursor-pointer ' src="/src/assets/imagens/icones/user.png" alt="usuario" />
                </Link>
            </div>        
        </div>
      </nav>
    )
}