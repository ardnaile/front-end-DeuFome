import React, { useState } from 'react';
import { Link,Outlet } from "react-router-dom";
import BackgroundLayout from "../estilos/VariosBackgrounds";
import NavBar from '../componentes/navbar';
import Rodape from '../componentes/rodape';
import MaisPassos from '../componentes/criarInputELabelPassos';
import MaisIngredientes from '../componentes/criarInputELabelIngredientes';


export default function CadReceita() {

  const [ingredientes, setIngredientes] = useState([]);
  const [quantidades, setQuantidades] = useState([]);
  const adicionarIngrediente = () => {
    // Adiciona uma nova instância da classe MaisIngredientes ao array de ingredientes
    setIngredientes([...ingredientes, <MaisIngredientes key={ingredientes.length} ingrediente={`Ingrediente ${ingredientes.length + 1}`} />]);
    setQuantidades([...quantidades, <MaisIngredientes key={quantidades.length} ingrediente={`Quantidade ${quantidades.length + 1}`} />]);
  };
  
  const [passos, setNovoPasso] = useState([]);
  const adicionarNovoPasso = () => {
    // Adiciona uma nova instância da classe MaisIngredientes ao array de ingredientes
    setNovoPasso([...passos, <MaisPassos key={passos.length} passo={`Passo ${passos.length + 1}`} />]);
  };

  const removerIngrediente = () => {
    const novosIngredientes = [...ingredientes];
    const novasQuantidades = [...quantidades];
    novosIngredientes.pop(); // Remove o último ingrediente
    setIngredientes(novosIngredientes);
    novasQuantidades.pop();
    setQuantidades(novasQuantidades);
  };
  
  const removerPasso = () => {
    const novosPassos = [...passos];
    novosPassos.pop(); // Remove o último ingrediente
    setNovoPasso(novosPassos);
  };
  return (
     <div className='grid grid-cols-1 mx-auto bg-slate-500 w-screen '>
        <NavBar/>
          <div className='grid justify-center items-center'>
            <h1 className='mt-16 text-6xl text-black font-text_ale text-center '> Crie novas receitas e compartilhe!</h1>
            <p className='font-paragrafos mb-8  text-white text-3xl rounded-lg text-center'> Assim que criar a receita em seu perfil compartilhe com todos</p>
          </div>

          <form className="w-2/3 container mx-auto bg-slate-900 p-4 space-y-4 mb-80 " action="">
            <div className='text-center' >

                <div className='flex items-center justify-center'>
                  <label className='text-white text-2xl font-text_ale' htmlFor="">Nome da sua receita</label>
                </div>

                <div className='flex items-center justify-center'>
                  <input className='text-center border-b-2 px-2 py-2 bg-slate-900 focus:outline-none text-white w-96 font-paragrafos text-2xl' required type="text" placeholder='Seja crativo'/>
                </div>
                
                <div className='flex justify-center mt-4 space-x-2'>
                  <label className='text-white text-2xl font-text_ale' htmlFor="">Ingredientes</label>
                  <img className='w-8 bg-white rounded-lg cursor-pointe hover:bg-green-500' onClick={adicionarIngrediente} src="./src/assets/imagens/icones/Plus.svg" alt="" />
                  <img className='w-8 bg-white rounded-lg cursor-pointer hover:bg-red-500' onClick={removerIngrediente} src="./src/assets/imagens/icones/Minus.svg" alt="" />
              </div>

                <div className='flex items-center justify-center p-4 mx-auto mb-3 mt-3'>
                    <div className=''>
                      {ingredientes.map((ingrediente, index) => (
                      <div key={index}>{ingrediente}</div>
                      ))}
                    </div> 
                    <div className=''>
                      {quantidades.map((quantide, index) => (
                      <div key={index}>{quantide}</div>
                      ))}
                    </div> 
                 </div>

                 <div className='flex justify-center mt-4  space-x-2'>
                    <label className='text-white text-2xl font-text_ale' htmlFor="">Modo de preparo</label>
                    <img className='w-8 bg-white rounded-lg cursor-pointer hover:bg-green-500' onClick={adicionarNovoPasso} src="./src/assets/imagens/icones/Plus.svg" alt="" />
                    <img className='w-8 bg-white rounded-lg cursor-pointer hover:bg-red-500' onClick={removerPasso} src="./src/assets/imagens/icones/Minus.svg" alt="" />
                </div>

                <div className='flex items-center justify-center p-4 mx-auto mb-3 mt-3'>
                    <div className='grid grid-cols-3'>
                      {passos.map((passo, index) => (
                      <div key={index}>{passo}</div>
                      ))}
                    </div> 
                 </div>
    
                  <div className='p-4 flex justify-center items-center mt-4'>
                     <Link to="/Receitas-lista">
                      <button className='bg-green-400 px-4 py-2 font-semibold text-white rounded-md mr-4' type="submit">Criar receita</button>
                    </Link>
                    <button className='bg-red-500 px-4 py-2 font-semibold text-white rounded-md ' type="submit">Cancelar</button>
                  </div>

                </div>
              </form>
            
       <Rodape/>
     </div>
  )
}

