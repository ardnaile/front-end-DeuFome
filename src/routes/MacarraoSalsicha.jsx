import { Link, Outlet } from "react-router-dom";
import NavBar from "../componentes/navbar";
import BackgroundLayout from "../estilos/VariosBackgrounds";
import Rodape from "../componentes/rodape";

export default function MacarraoSalsicha() {
  return (
    <BackgroundLayout backgroundImage={`url('./src/assets/imagens/img-fundo/Home.png')`}> 
      <NavBar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-transparent p-8 rounded-xl">
          <Outlet />
          <div className="flex justify-center">  
            <div className="text-red-900 max-w-3xl w-full font-bold text-3xl pt-4 pb-4 border-t-4 mt-4 border-red-900 rounded-xl bg-white text-center">
            Macarrão com salsicha
            </div> 
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white border-t-4 border-red-900 rounded-xl p-6 shadow-md grid grid-cols-3 gap-6 relative h-full">
                <div className="col-span-2">
                  <h1 className="text-red-900 font-bold text-2xl">Ingredientes:</h1>
                  <ul className="list-disc ml-4">
                    <li>250 gramas de macarrão (tipo penne ou fusilli)</li>
                    <li>500 gramas de salsicha picada</li>
                    <li>1 embalagem de molho de tomate</li>
                    <li>1 caixa de creme de leite</li>
                    <li>Salsinha picada a gosto</li>
                    <li>500 ml de água</li>
                    <li>1/2 colher de sopa de sal</li>
                    <li>1 folha de louro</li>
                    <li>1/2 cebola picada</li>
                    <li>1 colher de sopa de azeite</li>
                  </ul>
                </div>
                <div className="col-span- flex flex-col items-center justify-center mt-8 relative overflow-hidden">
                  <img
                    src="src\assets\imagens\imagensMassas\MacarraoSalsicha.jpg"
                    alt="Macarrão com Salsicha"
                    className="rounded-xl border-2 mt-10 border-solid border-white"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="font-bold text-2xl text-red-900">Modo de Preparo:</h1>
                  <ol className="list-decimal ml-4">
                    <li>Reúna todos os ingredientes;</li>
                    <li>Em uma panela de pressão, coloque todos os ingredientes e misture;</li>
                    <li>Tampe, leve ao fogo e deixe cozinhar por 5 minutos contados após pegar pressão;</li>
                    <li>Desligue o fogo, tire a pressão e transfira para um refratário;</li>
                    <li>Agora é só servir. Bom apetite!</li>
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