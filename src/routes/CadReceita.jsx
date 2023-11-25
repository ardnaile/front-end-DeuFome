import React from 'react'

import BackgroundLayout from "../estilos/VariosBackgrounds";
import NavBar from '../componentes/navbar';
import Rodape from '../componentes/rodape';

export default function CadReceita() {
  return (
    <div className='bg-transparent'>
        <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}>
            <NavBar/>
            <div className='container h-screen w-screen p-4 flex items-center
              bg-white mb-8'>

                   
                
            </div>
            
        </BackgroundLayout>
        <Rodape/>
    </div>
  )
}

