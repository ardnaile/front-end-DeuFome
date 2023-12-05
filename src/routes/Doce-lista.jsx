import React, { useState } from 'react';
import NavBar from '../componentes/navbar'
import BackgroundLayout from "../estilos/VariosBackgrounds";
import Rodape from '../componentes/rodape';
import { Link } from "react-router-dom";


export default function Pizza() {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
      };
      const closeModal = () => {
        setModalOpen(false);
      };
  return (
    <div className='mb-4'>
        <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/pizza.jpg')`}>
         <NavBar/>
        <div className="container mx-auto bg-white rounded-md border-y-4 border-red-900 mb-8 mt-8 "> 
            <h3 className='p-4 text-3xl font-bold  text-red-900 '>Doces</h3>
            <div className="grid flex-row gap-4 justify-center mr-6 p-8 pt-2">  
              
                <div className="bg-white p-4 mb-4  border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Churros com Chocolate</h1>
                        <p>Crocante por fora, macio por dentro e coberto por uma irresistível mistura de açúcar com canela, o churro é tão saboroso quanto versátil, já que sua receita básica pode ganhar sabores variados de acordo com o recheio desejado. A melhor parte, porém, é que fazer churros em casa é mais fácil do que se imagina - confira o passo a passo:</p>
                       
                        <button
                        onClick={openModal}
                         className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'
                        >
                        Visualizar receita
                        </button>
                        
                        <button className='bg-red-500 rounded-3xl mx-2 h-10 w-10'> usu </button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                  
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl"  src='src\assets\imagens\imagensDoce\churros.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Cookie Perfeito</h1>
                        <p>Os primeiros relatos sobre o cookie são do século XVII, mas quem criou a receita que conhecemos hoje foi a americana Ruth Wakefield, em 1930. De acordo com a chef confeiteira Karyne Iancoski, o preparo é fácil, mas requer alguns cuidados para que eles saiam perfeitos do forno. </p>
                        <Link to="/cokkieReceita">
                          <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                        </Link>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                    
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='src\assets\imagens\imagensDoce\cookies.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Pão de Mel</h1>
                        <p>Descubra o prazer único do nosso pão de mel artesanal, onde o mel se entrelaça delicadamente com especiarias e chocolate de alta qualidade. Cada mordida é uma explosão de sabores, resultado de uma cuidadosa produção artesanal. Nossos pães de mel são feitos com ingredientes selecionados, proporcionando uma experiência irresistível em cada pedaço. Seja para presentear alguém especial ou para se deliciar em momentos especiais, nossos pães de mel são a escolha perfeita. Permita-se saborear o melhor da confeitaria em cada mordida.</p>
                        <Link to="/PaodeMel">
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                        </Link>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='src\assets\imagens\imagensDoce\paodemel.webp'/>
                    </div>        
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Doce Fitness</h1>
                        <p>Desfrute do sabor delicioso sem comprometer a saúde com nossos doces fit! Nossas opções saudáveis oferecem indulgência sem culpa, utilizando ingredientes nutritivos e balanceados. Experimente uma variedade de sobremesas irresistíveis, desde brownies proteicos até bolos sem açúcar, cuidadosamente elaborados para satisfazer seu desejo por doçura de forma equilibrada. Combinamos o prazer do paladar com a preocupação com a saúde, proporcionando uma experiência de indulgência consciente. Descubra o lado mais saudável e saboroso dos doces conosco!</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='src\assets\imagens\imagensDoce\docefit.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Sorvete Fitness</h1>
                        <p>Explore a indulgência saudável com os nossos sorvetes fit! Delicie-se com sabores deliciosos sem comprometer a sua jornada de bem-estar. Feitos com ingredientes nutritivos e opções com baixo teor de açúcar, nossos sorvetes oferecem uma explosão de sabor refrescante sem culpa. Descubra uma variedade de opções, desde frutas tropicais até indulgentes misturas de chocolate, tudo cuidadosamente elaborado para proporcionar uma experiência gelada e equilibrada. Aproveite a doçura sem sacrificar a sua saúde, mergulhando em uma experiência refrescante que se alinha ao seu estilo de vida ativo.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='src\assets\imagens\imagensDoce\sorvetefit.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Torta de Amendoin</h1>
                        <p>Descubra uma explosão de sabor com a nossa irresistível torta de amendoim! Feita com uma base crocante de amendoim e um recheio cremoso, esta iguaria é uma celebração do sabor autêntico. Cada pedaço oferece a combinação perfeita de doçura e textura, enquanto o amendoim adiciona um toque único e delicioso. Uma opção de sobremesa indulgente, mas equilibrada, que vai conquistar os amantes de amendoim e os entusiastas de doces. Experimente uma fatia desta torta de amendoim para uma experiência única e inesquecível.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                     
                        <img className="w-46 rounded-full   border-orange-300 shadow-1xl" src='src\assets\imagens\imagensDoce\tortaamendoin.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className="text-red-900 font-bold text-2xl">Grand Gateau</h1>
                        <p>Deleite-se com a sofisticação e indulgência do nosso Grand Gateau, uma experiência culinária que eleva o conceito de sobremesa a um novo patamar. Esta obra-prima apresenta camadas generosas de bolo macio e cremoso, harmonizando texturas e sabores de maneira sublime. Coberto com um irresistível ganache e adornado com delicadas decorações, cada pedaço é uma celebração de prazer para o paladar. Desfrute do requinte de uma sobremesa que transcende expectativas, proporcionando uma experiência única de indulgência. Permita-se saborear o luxo em cada garfada com o nosso Grand Gateau, uma verdadeira obra de arte culinária.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                     
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='src\assets\imagens\imagensDoce\grand-gateau.jpg'/>
                    </div>
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Mousse de Chocolate</h1>
                        <p>Renda-se à indulgência com nossa irresistível mousse de chocolate. Essa sobremesa clássica cativa os amantes do chocolate com sua textura sedosa e sabor envolvente. Preparada com o mais fino chocolate, cada colherada derrete na boca, proporcionando uma experiência celestial de indulgência. Delicadamente aerada, nossa mousse é a escolha perfeita para encerrar uma refeição com elegância ou para simplesmente satisfazer os desejos por algo doce. Deleite-se com a decadência do chocolate em sua forma mais sublime, experimentando a suavidade e o sabor rico da nossa mousse de chocolate. Uma experiência divina para os verdadeiros apreciadores de sobremesas.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-45 rounded-full  border-orange-300 shadow-1xl" src='src\assets\imagens\imagensDoce\mousse-chocolate.webp'/>
                    </div>
            
                </div>

                <div className="bg-white p-4 mb-4 mt-4 border-x-2 border-red-900 shadow-md rounded-md grid grid-cols-3  ">
                    <div className="col-span-2">
                        <h1 className=" text-red-900 font-bold text-2xl">Beijinho</h1>
                        <p>Desfrute da doçura brasileira com nosso delicioso beijinho! Esta pequena iguaria, feita com coco ralado e leite condensado, é uma explosão de sabor e maciez em cada mordida. Com uma cobertura de coco queimado, nosso beijinho é a escolha perfeita para quem busca uma experiência autêntica e reconfortante. Seja em festas, celebrações ou como um agrado diário, permita-se saborear o encanto do beijinho, uma tradicional e irresistível expressão da doçura brasileira. Entregue-se a esse prazer adocicado e celebre momentos especiais com o gostinho único do nosso beijinho.</p>
                        <button className='bg-red-500 hover:bg-red-600 rounded-2xl w-60 text-white px-4 pt-2 py-2 mb-4 mt-4'>Visualizar receita</button>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center ">                       
                        <img className="w-46 rounded-full  border-orange-300 shadow-1xl" src='src\assets\imagens\imagensDoce\beijinho.jpg'/>
                    </div>
                </div>

            </div>
        </div>

              {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-8 rounded-md shadow-md max-h-screen overflow-y-auto w-full md:w-96">
  <button onClick={closeModal} className="absolute top-0 right-0 p-4 text-black cursor-pointer">
    X
  </button>
  <h1 className="text-red-900 font-bold text-2xl mb-4">Churros com Chocolate</h1>
  <h1 className="text-red-900 font-bold text-2xl mb-4">Ingredientes:</h1>
  <ul className="list-disc ml-4 text-base text-black">
                    <li>200 g de farinha de trigo;</li>
                    <li>1 colher (chá) de sal;</li>
                    <li>1 colher (sopa) de açúcar;</li>
                    <li>275 ml de água;</li>
                    <li>1 ovo;</li>
                    <li>1 gema;</li>
                    <li>1 colher (chá) de essência de baunilha;</li>
                    <li>Óleo para fritar;</li>
                    <li>Canela em pó e açúcar para polvilhar.</li>
                    </ul>

                    <h1 className="font-bold text-2xl text-red-900 mt-4">Modo de Preparo:</h1>
  <ol className="list-decimal ml-4 text-base text-black">
                    <li>Aqueça a água em uma panela média e, quando começar a ferver, adicione ao mesmo tempo a farinha, o sal e o açúcar. Mexa bem até a massa se soltar do fundo da panela, formando uma bola. Retire a massa da panela e deixe esfriar por cerca de 10 minutos.</li>
                    <li>Em seguida, adicione aos poucos o ovo batido, a gema e a baunilha, mexendo sempre até ficar bem uniforme. Coloque a massa em um saco de confeiteiro com bico liso de 1 centímetro e esprema diretamente no óleo quente, usando uma tesoura para cortar a massa do tamanho desejado do churro.</li>
                    <li>Frite por cerca de 3 minutos, até que os churros fiquem bem dourados. Deixe escorrer e finalize polvilhando uma misturinha feita com açúcar e canela. Depois de pronto, o churro pode ser mergulhado na cobertura que você preferir, como doce de leite, brigadeiro, goiabada, entre outras.</li>
                  </ol>
          </div>
        </div>
      )}
        <Rodape/>
        </BackgroundLayout>
    </div>
  );
}