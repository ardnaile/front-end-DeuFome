import { Link, Outlet } from "react-router-dom";
import NavBar from "../componentes/navbar";
import BackgroundLayout from "../estilos/VariosBackgrounds";
import Rodape from "../componentes/rodape";

export default function Pizza() {
  return (
    <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}> 
    <NavBar />
      <div className=" flex justify-center items-center min-h-screen">
        <div className="bg-transparent p-8 rounded-xl">
          <div className="flex justify-center">  
            <div className="text-red-900 max-w-3xl w-full font-bold text-3xl pt-4 pb-4 border-t-4 border-red-900 rounded-xl bg-white text-center">
              Pizza Baiana
            </div> 
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white border-t-4 border-red-900 rounded-xl p-6 shadow-md grid grid-cols-3 gap-6 relative h-full">
                <div className="col-span-2">
                  <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
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
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="https://pizzariadesucesso.com/wp-content/uploads/2018/05/pizza-baiana-picante-001-620x395.png"
                    alt="Pizza Baiana"
                    className="border-2 mt-10 border-solid border-white"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
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
            </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </BackgroundLayout>
  );
}