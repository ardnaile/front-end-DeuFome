import { useState } from 'react'
import './style.css'

function App() {
  return(
    <div className="p-8 bg-gray-200">
      <div className="text-red-900 font-bold text-2xl pt-0 pl-4 pr-4 pb-4 border-t-4 border-red-900 rounded-xl bg-white">
        Pizzas
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 shadow-md rounded-md grid grid-cols-3 gap-4 relative">
          <div className="col-span-2">
            <h1 className="font-bold text-red-900 font-bold text-2xl">Ingredientes:</h1>
            <ul className="list-disc ml-4">
              <li>Massa de pizza</li>
              <li>1 xícara (chá) de molho de tomate</li>
              <li>150 g de linguiça calabresa</li>
              <li>200 g de queijo mussarela fatiado</li>
              <li>2 ovos cozidos</li>
              <li>1 cebola</li>
              <li>Azeitona a gosto</li>
              <li>Orégano a gosto</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center mt-8 relative">
            <h2 className=" text-red-900 absolute top-0 font-bold text-2xl">Pizza Baiana</h2>
            <img
              src="https://pizzariadesucesso.com/wp-content/uploads/2018/05/pizza-baiana-picante-001-620x395.png"
              width="450"
              height="600"
              alt="Pizza Baiana"
              className="mt-10"
              class="mt-10 border-2 border-solid border-white rounded-md hover:border-gray-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-3">
            <h1 className="font-bold text-2xl text-red-900 ">Modo de Preparo:</h1>
            <ol className="list-decimal ml-4">
              <li>Pique a linguiça em pedaços pequenos.</li>
              <li>Fatie os ovos e a cebola.</li>
              <li>Passe o molho de tomate pela massa de pizza.</li>
              <li>Disponha a calabresa e os ovos.</li>
              <li>Coloque as fatias de queijo por cima.</li>
              <li>Acrescente a cebola picada, a azeitona e o orégano com quantidades a gosto.</li>
              <li>Asse e sirva.</li>
            </ol>
          </div>
        </div>


        <div className="bg-white p-4 shadow-md rounded-md grid grid-cols-3 gap-4 relative">
          <div className="col-span-2">
            <h1 className="font-bold text-red-900 text-2xl">Ingredientes:</h1>
            <ul className="list-disc ml-4">
              <li>2 xícaras (chá) de farinha de trigo</li>
              <li>1 colher (sopa) de fermento em pó</li>
              <li>meia colher (chá) de sal</li>
              <li>1 xícara (chá) de água</li>
              <li>4 colheres (sopa) de óleo</li>
              <li>1 xícara (chá) de molho de tomate</li>
              <li>300 g de linguiça calabresa defumada sem casca e em rodelas finas</li>
              <li>2 cebolas cortadas em rodelas finas</li>
              <li>meia xícara (chá) de azeitona preta sem caroço</li>
              <li>1 colher (sopa) de azeite de oliva</li>
              <li>1 colher (chá) de orégano</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center mt-8 relative">
            <h2 className=" text-red-900 absolute top-0 font-bold text-2xl">Pizza de Calabresa</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpveOg4FrHu8WlhBJsZyd9mQxOriaK1Hs1g&usqp=CAU"
              width="450"
              height="500"
              alt="Pizza Baiana"
              className="mt-10"
              class="mt-10 border-2 border-solid border-white rounded-md hover:border-gray-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-3">
            <h1 className="font-bold text-2xl text-red-900 ">Modo de Preparo:</h1>
            <ol className="list-decimal ml-4">
              <li>Em um recipiente, coloque a farinha peneirada, o fermento e o sal e misture.</li>
              <li>Faça uma cova no centro e acrescente a água e o óleo.</li>
              <li>Amasse bem e abra com o rolo, formando uma massa lisa.</li>
              <li>Unte uma forma para pizza (média) e modele a massa dentro.</li>
              <li>Despeje sobre a massa um pouco de molho de tomate, espalhe a linguiça e cubra com cebola.</li>
              <li>Decore com azeitonas, tempere com orégano e leve ao forno médio (180°C) preaquecido por 20 minutos, ou até a massa ficar assada.</li>
            </ol>
          </div>
        </div>


        <div className="bg-white p-4 shadow-md rounded-md grid grid-cols-3 gap-4 relative">
          <div className="col-span-2">
            <h1 className="font-bold text-red-900 text-2xl">Ingredientes:</h1>
            <ul className="list-disc ml-4">
              <li>1 colher (sopa) de Azeite de oliva extravirgem.</li>
              <li>1 unidade de Massa para pizza Massa Leve.</li>
              <li>5 colheres (sopa) de Molho de tomate caseiro (tomate, cebola e/ou alho).</li>
              <li>100 gramas de Palmito, juçara, em conserva.</li>
              <li>250 gramas de Queijo muçarela.</li>
              <li>100 gramas de tomate.</li>
              <li>100 gramas de batata palha.</li>
              <li>Orégano seco à gosto.</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center mt-12 relative">
            <h2 className=" text-red-900 absolute top-0 font-bold text-2xl text-center">Pizza de Palmito com Mussarela</h2>
            <img
              src="https://www.pizzariabelgrano.com.br/imagens/produtos/thumb/20120924060935palmito.png"
              width="450"
              height="600"
              alt="Pizza Baiana"
              className="mt-16"
              class="mt-16 border-2 border-solid border-white rounded-md hover:border-gray-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-3">
            <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
            <ol className="list-decimal ml-4">
              <li>Coloque o disco de pizza em uma assadeira.</li>
              <li>Cubra com o molho de tomate.</li>
              <li>Distribua os palmitos picados sobre o molho.</li>
              <li>Em seguida, cubra com a mussarela.</li>
              <li>Regue com azeite e salpique orégano.</li>
              <li>Leve ao forno médio até que a mussarela derreta.</li>
              <li>Sirva em seguida.</li>
            </ol>
          </div>
        </div>


        <div className="bg-white p-4 shadow-md rounded-md grid grid-cols-3 gap-4 relative">
          <div className="col-span-2">
            <h1 className="font-bold text-red-900 text-2xl">Ingredientes:</h1>
            <ul className="list-disc ml-4">
              <li>2 xícaras (chá) de farinha de trigo.</li>
              <li>1 colher (sopa) de fermento em pó.</li>
              <li>meia colher (chá) de sal.</li>
              <li>1 xícara (chá) de água.</li>
              <li>4 colheres (sopa) de óleo.</li>
              <li>1 xícara (chá) de molho de tomate.</li>
              <li>1 unidade de queijo provolone.</li>
              <li>1 unidade de queijo gorgonzola.</li>
              <li>1 pacote de queijo muçarela ralado.</li>
              <li>1 pacote de parmesão ralado.</li>
              <li>1 colher (chá) de orégano.</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center mt-16 relative">
            <h2 className=" text-red-900 absolute top-0 font-bold text-2xl text-center">Pizza Quatro Queijos</h2>
            <img
              src="https://primosoarespizzaria.com.br/pizzas/wp-content/uploads/2017/12/QUATRO-QUEIJOS.png"
              width="450"
              height="600"
              alt="Pizza Baiana"
              className="2"
              class="mt-16 border-2 border-solid border-white rounded-md hover:border-gray-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-3">
            <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
            <ol className="list-decimal ml-4">
              <li>Em um recipiente, coloque a farinha peneirada, o fermento e o sal e misture.</li>
              <li>Faça uma cova no centro e acrescente a água e o óleo.</li>
              <li>Amasse bem e abra com o rolo, formando uma massa lisa.</li>
              <li>Unte uma forma para pizza (média) e modele a massa dentro.</li>
              <li>Despeje sobre a massa um pouco de molho de tomate, coloque o queijo provolone em tiras, o queijo gorgonzola em pedaços pequenos, o queijo muçarela ralado e finalize com o parmesão ralado.</li>
              <li>Tempere com orégano e leve ao forno médio (180°C) preaquecido por 20 minutos, ou até a massa ficar assada.</li>
            </ol>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md">Pizza 5</div>

        <div className="bg-white p-4 shadow-md rounded-md">Pizza 6</div>


      </div>
    </div>
  )
 
}

export default App
