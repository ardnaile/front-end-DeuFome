import React from 'react'
import NavBar from '../componentes/navbar'
import BackgroundLayout from "../estilos/VariosBackgrounds";
import Rodape from '../componentes/rodape';

export default function Pizza_lista() {
  return (
    <div className='mb-4'>
        <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/pizza.jpg')`}>
         <NavBar/>
        <div className="container mx-auto bg-white rounded-md border-y-4 border-red-900 mb-8 mt-8 "> 
            <h3 className='p-4 text-3xl font-bold  text-red-900 '>Pizzas</h3>
            <div className="grid flex-row gap-4 justify-center mr-6 p-8 pt-2">  
              
                <div className="bg-white p-4 mb-4  border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Banana com Chocolate</h1>
                        <p>Massa de pizza, banana, chocolate.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                  
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl px-16 " src='/src/assets/imagens/imagensPizza/banana.png'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Chocolate Preto</h1>
                        <p>Pouca mussarela, creme de leite e chocolate Preto.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                    
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='/src/assets/imagens/imagensPizza/chocolate.png'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Chocolate Branco</h1>
                        <p>Pouca mussarela, creme de leite e chocolate branco.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='/src/assets/imagens/imagensPizza/chocbranco.png'/>
                    </div>        
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Frango</h1>
                        <p>Mussarela, frango desfiado e requeijão catupiry.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='/src/assets/imagens/imagensPizza/frango.png'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">4 Queijos</h1>
                        <p>Mussarela, provolone, parmesão e gorgonzola</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='/src/assets/imagens/imagensPizza/4queijo.png'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Bacon</h1>
                        <p>Bacon em cubos, mussarela e requeijão.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                     
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='/src/assets/imagens/imagensPizza/bacon.png'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className="text-red-900 font-bold text-2xl">Calabresa</h1>
                        <p>Mussarela, calabresa e cebola.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                     
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='/src/assets/imagens/imagensPizza/calabresa.png'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Portuguesa</h1>
                        <p>Mussarela, cebola, presunto e ovos.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-45 rounded-full  border-orange-300 shadow-1xl" src='/src/assets/imagens/imagensPizza/portuguesa.png'/>
                    </div>
            
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Joaquina</h1>
                        <p>Mussarela, bacon, tomate e requeijão catupiry.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='/src/assets/imagens/imagensPizza/joaquina.png'/>
                    </div>
                </div>

            </div>
        </div>
        <Rodape/>
        </BackgroundLayout>
    </div>
)}
