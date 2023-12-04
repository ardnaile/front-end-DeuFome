import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Essa estrutura de JSON abaixo finge ser um banco de dados de produtos "fake"
 */
import receitasData from "../receitas.json";
import Rodape from "../componentes/rodape";
import NavBar from "../componentes/navbar";

export default function Receitas() {
  // a variável-state abaixo irá armazenar nossos produtos do sistema para listarmos em tela
  const [items] = useState(receitasData);

  const VisualizarReceita =() => {
    {items.map(item => (
      <div key={item.id} className="text-xl">
      <Link to={`/receitas/${item.id}`} >
        {item.name}
      </Link>
      </div>
      ))}

  }
 

  return (
    <div className="w-screen ">
      <NavBar/>
        <div className="items-center justify-center flex mt-4">
          <h1 className="mb-5 text-3xl font-semibold  text-red-900">Suas Receitas</h1>
        </div>

      <div className="container mx-auto bg-white p-4 w-1/2 grid grid-cols-3 border-x-2 border-red-900 shadow-md rounded-md  space-y-5 mb-80 ">
        <div className="col-span-2 ">
          <h1 className=" text-red-900 font-bold text-2xl">Banana com Chocolate</h1>
          
              <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita
            
              </button>
              <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4'>Compartilhar</button>
              <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4'>Deletar receita</button>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center ">                  
          <img className="w-46 rounded-full   border-orange-300 shadow-1xl px-16 " src='/src/assets/imagens/imagensPizza/banana.png'/>
        </div>

      <div className="col-span-2">
        <h1 className=" text-red-900 font-bold text-2xl">Banana com Chocolate</h1>
   
        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4'>Compartilhar</button>
        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4'>Deletar receita</button>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center ">                  
        <img className="w-46 rounded-full   border-orange-300 shadow-1xl px-16 " src='/src/assets/imagens/imagensPizza/banana.png'/>
      </div>

      <div className="col-span-2 ">
          <h1 className=" text-red-900 font-bold text-2xl">Banana com Chocolate</h1>

              <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
              <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4'>Compartilhar</button>
              <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-48 ml-2 text-white px-4 pt-2 py-2 mb-4 mt-4'>Deletar receita</button>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center ">                  
          <img className="w-46 rounded-full   border-orange-300 shadow-1xl px-16 " src='/src/assets/imagens/imagensPizza/banana.png'/>
        </div>
        






      </div>

      <Rodape/>
    </div>
    
  );
}


{/* <nav>
<ul className="space-y-3">
  {items.map(item => (
    <li key={item.id} className="text-xl">
      <Link to={`/receitas/${item.id}`} className="hover:underlined hover:text-red-700">
        {item.name}
      </Link>
    </li>
  ))}
</ul>
</nav> */}