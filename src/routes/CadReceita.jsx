import React from 'react'

import BackgroundLayout from "../estilos/VariosBackgrounds";
import NavBar from '../componentes/navbar';
import Rodape from '../componentes/rodape';

export default function CadReceita() {
  return (
    <div className='mx-auto w-screen h-screen'>
            <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/cadRec.jpg')`}>
            <NavBar/>  
            <div className='container bg-transparent mx-auto space-y-8 '>
                <h1 className='text-6xl text-red-900 font-titulos mb-4 '> Crie novas receitas e compartilhe</h1>
                <p className='font-paragrafos pt-4 pb-4 px-4 py-4 bg-white opacity-60 text-black text-3xl rounded-lg border-2'> 
                  Na deu fome gostamos muito de compartilhar as nossas receitas com todos, queremos que contribua para essa comunidade a crescer. <br />
                  Mais fique tranquilo somente pessoas cadastradas em nosso site podem visualizar as receitas de sua criação e você <br /> pode compartilhar
                  somente entre amigos se quiser.
                </p>
                <form className='bg-white p-4  justify-center opacity-60 text-black text-3xl rounded-lg border-2 py-8'  action="">
                 
                    <div>
                      <label className='text-white text-2xl'htmlFor="">Nome da receita</label>
                      <input className='w-96 ml-4 px-2 py-1' type="text" name="" id="" />
                    </div>
                    <div className=''>
                      <h2 className='text-2xl text-white'>Ingredientes</h2>
                      <textarea className='w-96 mt-2 px-2' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className=' py-4'> 
                      <h2 className='text-2xl text-white'>Modo de preparo</h2>
                      <textarea className='w-96 mt-2 px-2' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                      <button className='bg-green-400 px-4 py-2 rounded-md' type="submit">
                        Gravar receita
                      </button>
                    </div>
             
                </form>
            </div>   
          <Rodape/> 
      </BackgroundLayout>
    </div>
  )
}

