import React from 'react'
import NavBar from '../componentes/navbar'
import BackgroundLayout from "../estilos/VariosBackgrounds";
import Rodape from '../componentes/rodape';
import { Link } from "react-router-dom";

export default function MassasLista() {
  return (
    <div className='mb-4'>
        <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/pizza.jpg')`}>
         <NavBar/>
        <div className="container mx-auto bg-white rounded-md border-y-4 border-red-900 mb-8 mt-8 "> 
            <h3 className='p-4 text-3xl font-bold  text-red-900 '>Massas</h3>
            <div className="grid flex-row gap-4 justify-center mr-6 p-8 pt-2">  
              
                <div className="bg-white p-4 mb-4  border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Macarrão à Bolonhesa</h1>
                        <p>O clássico da culinária italiana é o prato preferido de muitos brasileiros. Essa versão é bem tradicional e leva carne moída, azeite, cebola, caldo, tomate, molho pronto, azeitonas e cenoura. Confira o passo a passo e aproveite!</p>
                        <Link to="/MacarraoBolonhese">
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                        </Link>
                        {/* <button className='bg-red-500 rounded-3xl mx-2 h-10 w-10'> usu </button> */}
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                  
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl"  src='src\assets\imagens\imagensMassas\macarraoBolonhesa.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Macarrão com salsicha</h1>
                        <p>Tem que preparar algo rápido? Então essa sugestão é para você! Você precisará de apenas 15 minutos e uma panela de pressão para fazer esse macarrão de salsicha com molho cremoso de tomate. Apesar de simples, o resultado é uma delícia.</p>
                        <Link to="/MacarraoSalsicha">
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                        </Link>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                    
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='src\assets\imagens\imagensMassas\MacarraoSalsicha.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Macarrão 4 Queijos</h1>
                        <p>Mais uma receita fácil e cheia de sabor, já que aposta em um delicioso molho branco de quatro queijos. Combinando gorgonzola, prato, provolone e parmesão, já dá para imaginar que o resultado será irresistível, não é mesmo?</p>
                        <Link to="/Macarrao4Queijos">
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                        </Link>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='src\assets\imagens\imagensMassas\MacarraoQueijo.jpg'/>
                    </div>        
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Ravioli com recheio de Abóbora e gorgonzola</h1>
                        <p>Já aqui, a dica é preparar os raviolis com massa fresca de lasanha, que será recheada com uma mistura de abóbora cabotiá, temperos e queijo gorgonzola. O preparo é simples, mas rende um prato delicioso que você pode servir em qualquer almoço ou jantar especial.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='src\assets\imagens\imagensMassas\Ravioli.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Rondelli de abobrinha com frango</h1>
                        <p>Para um prato mais leve e saudável, essa receita aposta na substituição da massa tradicional por fatias bem finas de abobrinha. Recheie-as com mussarela e frango desfiado, cubra com molho de tomate e mais mussarela, leve ao forno por uns minutos e está pronto!</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='src\assets\imagens\imagensMassas\RondeliAbobrinha.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Conchiglione recheado com camarão</h1>
                        <p>Para uma massa com um toque sofisticado, a dica é apostar nesse conchiglione recheado com um camarão bem temperado ao molho vermelho. O prato ainda leva molho branco caseiro, além de uma camada de queijo ralado para garantir aquela deliciosa casquinha crocante.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                     
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='src\assets\imagens\imagensMassas\ConchiglioneCamarao.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className="text-red-900 font-bold text-2xl">Conchiglione de espinafre e ricota</h1>
                        <p>Já deu para perceber que a ricota faz sucesso no recheio de massa, né? Nessa receita, a sugestão é combinar o queijo com espinafre e temperos para rechear conchigliones já cozidos. Depois, é só gratinar com molho branco e queijo ralado e aproveitar.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                     
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='src\assets\imagens\imagensMassas\conchiglioneEspinafre.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Conchiglione de ricota e tomate seco</h1>
                        <p>E que tal usar ricota e tomate seco no recheio da sua massa? Aqui, o prato ainda é incrementado com azeitonas, temperos, molho branco, queijo ralado e orégano. O resultado é um conchiglione supercremoso e cheio de sabor.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-45 rounded-full  border-orange-300 shadow-1xl" src='src\assets\imagens\imagensMassas\ConchiglioneRicota.jpg'/>
                    </div>
            
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Panqueca de carne moída</h1>
                        <p>Leve, saborosa e nutritiva, essa é uma boa opção para servir em jantares especiais. Além do recheio, o toque final dessa receita fica por conta do molho de tomate, que é misturado à carne e garante uma apresentação apetitosa ao prato.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='src\assets\imagens\imagensMassas\panquecaCarne.jpg'/>
                    </div>
                </div>

            </div>
        </div>
        <Rodape/>
        </BackgroundLayout>
    </div>
)}