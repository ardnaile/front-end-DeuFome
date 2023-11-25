import { Link, Outlet } from "react-router-dom";
import NavBar from "../componentes/navbar";
import BackgroundLayout from "../estilos/VariosBackgrounds";
import Rodape from "../componentes/rodape";

export default function Pizza() {
  return (
    <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}> 
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-transparent p-8 rounded-xl">
          <NavBar />
          <Outlet />
          <div className="flex justify-center">  
            <div className="text-red-900 max-w-3xl w-full font-bold text-3xl pt-4 pb-4 border-t-4 border-red-900 rounded-xl bg-white text-center">
              Pizza de Calabresa
            </div> 
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white border-t-4 border-red-900 rounded-xl p-6 shadow-md grid grid-cols-3 gap-6 relative h-full">
                <div className="col-span-2">
                  <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
                  <ul className="list-disc ml-4">
                    <li>2 1/2 xícaras (chá) de farinha de trigo sem fermento</li>
                    <li>4 colheres de óleo</li>
                    <li>1 colher (cha) açúcar</li>
                    <li>Água Morna</li>
                    <li>1 ovo</li>
                    <li>1 colher (cha) sal</li>
                    <li>1 colher (sopa) de fermento biológico</li>
                    <li>Bacon a gosto</li>
                    <li>Molho de tomate</li>
                    <li>Azeitonas pretas</li>
                    <li>Mussarela a gosto</li>
                    <li>Orégano</li>
                  </ul>
                </div>
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="/src/assets/imagens/imagensPizza/bacon.png"
                    alt="Pizza de Calabresa"
                    className="border-2 mt-10 border-solid border-white"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
                  <ol className="list-decimal ml-4">
                    <li>Em uma vasilha média acrescentar o trigo.</li>
                    <li>Faça um buraco no meio do trigo e coloque o ovo, óleo, sal, açúcar e em volta, na parte que está seca do trigo acrescente o fermento.</li>
                    <li>Misture um pouco e logo em seguida adicione a água morna aos poucos, até a massa ganhar consistência, mas não pode ficar muito dura a massa, tem que ficar bem fofinha.</li>
                    <li>Deixe a massa descansar por 40 minutos para pegar o ponto.</li>
                    <li>Depois da massa descansada abra-a em uma forma grande de pizza untada com óleo somente.</li>
                    <li>Acrescente o recheio na seguinte ordem: molho de tomate, mussarela, bacon, azeitonas e por último o orégano.</li>
                    <li>Coloque pra assar por 20 minutos no forno pré-aquecido na temperatura máxima.</li>
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