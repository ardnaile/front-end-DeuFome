import {Link} from "react-router-dom";
import Rodape from "../componentes/rodape";
import BackgroundLayout from "../estilos/VariosBackgrounds";
import { useState } from 'react';
import NavBar from "../componentes/navbar";
import PizzaCalabresa from "../routes/PizzaCalabresa"

export default function Perfil (){

    return(
        <div label='div-maior'>
        <NavBar/>
        <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}>
        
        <h1 className='font-text_ale text-white text-4xl'>Olá, Usuário!</h1>

        <div label='div-botoes' className='flex flex-col'>
            <button className='bg-white w-40 py-2 m-2 rounded-xl text-xl hover:bg-red-900 hover:text-white'> Configurações </button>
            <button className='bg-white w-40 py-2 m-2 rounded-xl text-xl hover:bg-red-900 hover:text-white'> Sair </button>
        </div>

        <div label='div-salvos'>
        
        </div>
        
        </BackgroundLayout>
        <Rodape/>
        </div>

    );
};